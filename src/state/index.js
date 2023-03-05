import {
    create
} from 'zustand'

import {
    devtools,
    persist
} from 'zustand/middleware'
export const userStore = create(devtools(
    persist((set) => ({
        user: undefined,
        isBou: undefined,
        setUser: ({user,isBou}) => set((state) => {
            return ({
            user,
            isBou
        })
        }),
        logout: () => set({
            user: undefined
        })
    }), {
        name: 'oumaima-user-storage',
    })))