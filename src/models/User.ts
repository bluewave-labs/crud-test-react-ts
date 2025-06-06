

export type User = {
    id: string
    firstName: string
    lastName: string
    emailAddress: string
    phone: string
    dateOfBirth: string
    role: 'admin' | 'user'
    createdAt: string
    updatedAt: string
}