// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (tiles: any) => {
    return [...tiles].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
