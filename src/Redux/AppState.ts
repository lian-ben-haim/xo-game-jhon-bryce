import { configureStore } from "@reduxjs/toolkit";

export type AppState = {
    // products : ProductModel[];
    // user : UserModel;
    // employees : EmployeeModel[]; 
};

export const appStore = configureStore<AppState>({
    reducer: {
        // products: productReducer,
        // user: authReducer,
        // employees: employeeReducer
    }
});