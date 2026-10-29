import asyncio

async def compute():
  print("compute: начали")
  await asyncio.sleep(1)
  print("compute: закончили")
  return 42

async def main():
  coro = compute()          # это ещё корутина, она НЕ выполняется
  task = asyncio.create_task(coro)  # Task обернул корутину и запланировал её

  print("main: Task создан, корутина уже выполняется в фоне")

  result = await task       # ждём завершения Task и получаем результат
  print("main: результат =", result)

asyncio.run(main())