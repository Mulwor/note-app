import asyncio, time

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