import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ManageProducts from '../../../../../routes/manage/manage-products';
import { CategoriesContext } from '../../../../../store/categories-context';
import { ProductsContext } from '../../../../../store/products-context';
import { categoriesMock } from '../../../../__mocks__/category-mock';
import { cardProductMock } from '../../../../__mocks__/card-mock';

jest.mock('../../../../../components/card/card-product/helpers');

const renderEmptyContext = () => {
  return render(
    <MemoryRouter>
      <CategoriesContext.Provider
        value={{
          categories: {},
          setCategories: jest.fn(),
          addCategory: jest.fn(),
          updateCategory: jest.fn(),
          deleteCategory: jest.fn(),
        }}
      >
        <ProductsContext.Provider
          value={{
            products: [],
            setProducts: jest.fn(),
            addProducts: jest.fn(),
            deleteProduct: jest.fn(),
          }}
        >
          <ManageProducts />
        </ProductsContext.Provider>
      </CategoriesContext.Provider>
    </MemoryRouter>
  );
};

const renderMockedContext = () => {
  return render(
    <MemoryRouter>
      <CategoriesContext.Provider
        value={{
          categories: categoriesMock,
          setCategories: jest.fn(),
          addCategory: jest.fn(),
          updateCategory: jest.fn(),
          deleteCategory: jest.fn(),
        }}
      >
        <ProductsContext.Provider
          value={{
            products: cardProductMock,
            setProducts: jest.fn(),
            addProducts: jest.fn(),
            deleteProduct: jest.fn(),
          }}
        >
          <ManageProducts />
        </ProductsContext.Provider>
      </CategoriesContext.Provider>
    </MemoryRouter>
  );
};

describe('ManageProducts', () => {
  describe('while feteching data', () => {
    beforeAll(() => {
      renderEmptyContext();
    });

    it('should display loading spinner', () => {
      const loadingSpinner = screen.getByTestId('loading-spinner');

      expect(loadingSpinner).toBeInTheDocument();
    });

    it('should not display add product buttons', () => {
      const addProductBtn = screen.queryByRole('button', {
        name: /Add new product$/i,
      });

      expect(addProductBtn).not.toBeInTheDocument();
    });
  });

  describe('displays content when data is fetched', () => {
    beforeEach(() => {
      renderMockedContext();
    });

    it('should not display loading spinner', () => {
      const loadingSpinner = screen.queryByTestId('loading-spinner');

      expect(loadingSpinner).not.toBeInTheDocument();
    });

    it('should display add product button', () => {
      const addProductBtn = screen.getByRole('button', {
        name: /Add new product$/i,
      });

      expect(addProductBtn).toBeInTheDocument();
    });

    it('should display shop contents', () => {
      const tabs = screen.getByRole('tablist');
      const products = screen.getAllByRole('tabpanel');

      expect(tabs).toBeInTheDocument();
      expect(products).toBeTruthy();
      expect(products).toHaveLength(3);
    });
  });
});
