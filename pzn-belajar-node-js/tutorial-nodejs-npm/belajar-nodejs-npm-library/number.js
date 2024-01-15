// Menambah file baru, artinya menambah fitur baru. Aturan semantic nya adalah 1.x.x

export const min = (first, second) => {
    if (first < second) {
        return first;
    } else {
        return second;
    }
}

export const max = (first, second) => {
    if (first > second) {
        return first;
    } else {
        return second;
    }
}