import asyncio, time

# Корутина — это функция, которую можно приостановить
# на середине, а потом продолжить с того же места. 

# Ниже будет даны 1 корутина
async def main():
  print("начало")
  await asyncio.sleep(1)
  print("конец")

asyncio.run(main())
# ? -> начала - пауза на 1 сек - конец 

# ! =======================================================
async def hello(name):
  print(f"Hi, {name}!")
  await asyncio.sleep(1)
  print(f"Bye, {name}!")

async def main():
  await asyncio.gather(hello("Аня"), hello("Боря"))

asyncio.run(main())
# ?  -> Hi, Аня! -> Hi, Боря! -> Bye, Аня! -> Bye, Боря!

# ! =======================================================
# 2 корутины

async def job(name, sec):
  print(f"{name} старт")
  await asyncio.sleep(sec)
  print(f"{name} финиш")

# Медленный
async def main():
  t = time.perf_counter()
  await job("A", 2)   # ждём A полностью
  await job("B", 2)   # потом B
  print(f"время: {time.perf_counter() - t:.1f}с")  # ~4с

# Быстрый
async def main():
  t = time.perf_counter()
  await asyncio.gather(
    job("A", 2),
    job("B", 2),
  )
  print(f"время: {time.perf_counter() - t:.1f}с")  # ~2с

asyncio.run(main())

# ! =======================================================
async def square(x):
  await asyncio.sleep(0.5)
  return x * x

async def main():
  results = await asyncio.gather(
    square(2), square(3), square(4),
  )
  print(results)  # [4, 9, 16]

asyncio.run(main())