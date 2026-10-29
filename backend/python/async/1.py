import asyncio, time

# ? -> начала - пауза на 1 сек - конец 
async def first():
  print("НАЧАЛО")
  await asyncio.sleep(1)
  print("КОНЕЦ")

# ? Hi, Valera! -> пауза на 1 сек -> Bye, Valera!
# ? Hi, Аня! -> Hi, Боря! пауза на 1 сек -> Bye, Аня! -> Bye, Боря!
async def second(name):
  print(f"Hi, {name}!")
  await asyncio.sleep(1)
  print(f"Bye, {name}!")

async def third(seconds):
  print(f"Начинаем запрос на {seconds}")
  await asyncio.sleep(seconds)
  print(f"Запрос на {seconds} прошел успешно")

async def main():
  # print(await first())

  # print(await second("Valera"))
  # * gather - позволяет выполнять несколько асинхронных задач параллельно
  # print(await asyncio.gather(
  #   second("Аня"), 
  #   second("Боря")
  # ))

  start = time.perf_counter
  # await third(2)
  # await third(4)
  # print(time.perf_counter() - start)
  # * Позволяет запустить как отдельную асинхронную задачу, которая выполняется
  # * конкрунетно с остальным кодом.
  # task1 = asyncio.create_task(third(2))
  # task2 = asyncio.create_task(third(4))
  # await task1 
  # await task2
  # print(time.perf_counter() - start)
  # * Можно короче еще через gather
  await asyncio.gather(third(2), third(4), third(3))

asyncio.run(main())