export interface User {
    id: string;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async(id: string) => {

    await new Promise(res => setTimeout(res, 2000));

    return {
        id: id,
        name: 'Angelo Marangon',
        location: 'Treviso, Italia',
        role: 'Software Development'
    }
}