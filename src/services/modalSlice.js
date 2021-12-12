import {createSlice} from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isDefaultModalOpen: false,
        isOrderModalOpen: false,
    },
    reducers: {
        openDetailModalOpen: (state) => {
            state.isDefaultModalOpen = true
        },
        closeDetailModalOpen: (state) => {
            state.isDefaultModalOpen = false
        },
        openOrderModal: (state) => {
            state.isOrderModalOpen = true
        },
        closeOrderModal: (state) => {
            state.isOrderModalOpen = false
        },
    }
}) 

export const { openDetailsModal, closeDetailsModal, openOrderModal, closeOrderModal } = modalSlice.actions;
export default modalSlice.reducer;