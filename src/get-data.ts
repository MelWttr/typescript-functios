export const getData = async<T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка ${response.status}`);
      }
      return await response.json() as T;
};