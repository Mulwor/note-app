//Реализовать useFetch хук для запросов на сервер. Предусмотреть обработку ошибок и загрузку.
import { useState, useEffect } from "react";

function useFetch(url) {}

function Component({ url }) {
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Имя: {data?.name}</div>;
}
