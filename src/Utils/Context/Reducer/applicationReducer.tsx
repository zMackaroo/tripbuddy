/* eslint-disable @typescript-eslint/no-explicit-any */
export const initialStore = {
  application: {
    selectedTravelGroup: '',
    isFetching: false,
    showModal: false,
  },
  geminiParamsConfig: {
    destination: '',
    days: 0,
    budget: 0,
    pax: 0,
  },
  geminiGenerativeResult: null,
  auth: {},
};

export const applicationReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_STORE':
      return { ...state, ...action.payload };
  }

  return state;
};
