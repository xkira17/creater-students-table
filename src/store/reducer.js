export const initialState = {
  student: [
    {
      id: 1,
      fullName: "John",
      address: "Nukus",
      email: "john@gmail.com",
      phone: "+99890242646",
    },
    {
      id: 2,
      fullName: "John",
      address: "Nukus",
      email: "john@gmail.com",
      phone: "+99890242646",
    },
    {
      id: 3,
      fullName: "John",
      address: "Nukus",
      email: "john@gmail.com",
      phone: "+99890242646",
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT": {
      return {
        ...state,
        student: [action.payload, ...state.student],
      };
    }
    case "DELETE_STUDENT": {
      return {
        ...state,
        student: state.student.filter((item) => item.id !== action.payload),
      };
    }
  }
};
