interface IDIoBank {
    login: boolean
    user: { 
        email: string
        password: string
        name: string
        balance: number
        id: string
    }
}

const dioBank = {
    login: false,
    user: {
        email: "",
        password: "",
        name: "",
        balance: 1,
        id: "",
    }
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
