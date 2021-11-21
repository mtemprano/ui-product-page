import React from "react"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import { waitFor, fireEvent, getNodeText, waitForElementToBeRemoved } from "@testing-library/dom"
import userEvent from '@testing-library/user-event'
import App from "../App"
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import productPageReducer from "../reducers";
import productPageSagas from "../sagas";
import {SortType, SortValues} from "../components/TopSection/TopSection";

// Helpers
const getTextFromNodes = (nodesArray: any) => nodesArray.map((node: any) => getNodeText(node));
const getNewStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(productPageReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(productPageSagas)
  return store;
}

describe("Integration tests", () => {
  let renderedApp: any

  beforeEach(async () => {
    renderedApp = render(
      <Provider store={getNewStore()}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>,
    )

    // Wait for loading element ot disappear so all items are loaded
    await waitForElementToBeRemoved(() => renderedApp.queryByText('...Loading'))
  })

  test('should display 5 items per page', () => {
    const { getAllByTestId } = renderedApp;

    expect(getAllByTestId("list-item")).toHaveLength(5)
  });

  test('should display 4 page numbers to match the amount of mocked items', () => {
    const { getAllByTestId } = renderedApp;

    expect(getAllByTestId('page-number')).toHaveLength(4)
  });

  test('upon changing page, the displayed items should change', () => {
    const { getAllByTestId } = renderedApp;

    let itemNameNodes = getAllByTestId('item-title');
    expect(getTextFromNodes(itemNameNodes)).toEqual([
      "iPhone 6S Oro",
      "Polaroid 635",
      "Bolso piel marca Hoss",
      "Reloj de Daniel Wellington",
      "Coche antiguo americano",
    ]);
    const pages = getAllByTestId('page-number');
    fireEvent.click(pages[1]);
    itemNameNodes = getAllByTestId('item-title');

    expect(getTextFromNodes(itemNameNodes)).toEqual([
      "Barbacoa",
      "Sofa de piel auténtica",
      "Vespa restaurada",
      "Batidora",
      "Mudanzas",
    ]);
  });

  test('filtering can be done through the searchbar and it should match against all text fields', async () => {
    const { getByTestId, getAllByTestId } = renderedApp;
    const searchBar = getByTestId('search-bar')
    userEvent.type(searchBar, "bol");

    await waitFor(() => {
      const itemNameNodes = getAllByTestId('item-title');

      expect(getTextFromNodes(itemNameNodes)).toEqual([
        "Bolso piel marca Hoss",
        "Cámara réflex",
        "Material de oficina"
      ]);
      expect(getAllByTestId('page-number')).toHaveLength(1)
    })
  });

  test('adding some items to favourites, then clicking on show favourites should display a model with those same items', async () => {
    const { getByTestId, getAllByTestId } = renderedApp;
    const favsButtons = getAllByTestId('add-favourites-button')
    fireEvent.click(favsButtons[0]);
    fireEvent.click(favsButtons[1]);
    fireEvent.click(favsButtons[2]);
    const showFavsButtons = getByTestId('show-favourites-button')
    fireEvent.click(showFavsButtons);

    await waitFor(() => {
      const itemNameNodes = getAllByTestId('item-title-simple');

      expect(getTextFromNodes(itemNameNodes)).toEqual([
        "iPhone 6S Oro",
        "Polaroid 635",
        "Bolso piel marca Hoss",
      ]);
    })
  });

  test('clicking on the remove button when there is only one item in favourites should display an empty favourites list', async () => {
    const { getByTestId, getAllByTestId, queryByText } = renderedApp;
    const favsButtons = getAllByTestId('add-favourites-button')
    fireEvent.click(favsButtons[0]);
    const showFavsButtons = getByTestId('show-favourites-button')
    fireEvent.click(showFavsButtons);

    await waitFor(() => {
      const itemNameNodes = getAllByTestId('item-title-simple');

      expect(getTextFromNodes(itemNameNodes)).toEqual([
        "iPhone 6S Oro",
      ]);
    })

    const removeButton = getByTestId('remove-favourites-button-simple')
    fireEvent.click(removeButton);

    expect(queryByText('No elements found')).toBeDefined();
  });

  test('should be able to sort through the selectors in the top section', async () => {
    const { getByTestId, getAllByTestId } = renderedApp;
    // In this example we'll be sorting by price and desc
    const sortBySelector = getByTestId('sortBy-selector')
    userEvent.selectOptions(sortBySelector, [SortValues.Price])
    const sortTypeSelector = getByTestId('sortType-selector')
    userEvent.selectOptions(sortTypeSelector, [SortType.Desc])

    await waitFor(() => {
      const itemNameNodes = getAllByTestId('item-title');

      expect(getTextFromNodes(itemNameNodes)).toEqual([
        "Piso en Clot",
        "Coche antiguo americano",
        "Vespa restaurada",
        "iPhone 6S Oro",
        "Macbook 13 pulgadas"
      ]);
    })
  });
})
