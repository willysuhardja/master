export const initialState = {
  startTime: 0,
  endTime: 0,
  duration: 0,
  location: {
    id: null,
    name: '',
  },
  verificationLoading: false,
  verificationSuccess: false,
  verificationError: false,
  productDetailLoading: false,
  productDetailSuccess: false,
  productDetailError: false,
  productDetail: {
    sku: null,
  },
  addScanItemLoading: false,
  addScanItemSuccess: false,
  addScanItemError: false,
};
