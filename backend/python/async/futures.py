import asyncio

async def main():
  loop = asyncio.get_running_loop()
  fut = loop.create_future()  # создаём Future в состоянии pending

  async def setter():
    await asyncio.sleep(1)   # имитируем асинхронную работу
    fut.set_result("данные готовы")  # кладём результат в Future

  asyncio.create_task(setter())  # запускаем «производителя» результата

  print("Ждём результат...")
  result = await fut             # ждём, пока Future не станет done
  print("Получили:", result)

asyncio.run(main())