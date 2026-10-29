Корутина — это функция, которую можно приостановить на середине, а потом продолжить с того же места. 

```python
async def main():
  print("начало")
  await asyncio.sleep(1)
  print("конец")

asyncio.run(main())
```