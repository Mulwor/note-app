export type UserType = {
    name: string,
    age: number
    address?: {
        title: string
    }
}
const increaseAge = (u: UserType) => u.age++

test('reference type test', ()=> {
    let user: UserType = {
        name: "Ali",
        age: 25
    }
    increaseAge(user)
    expect(user.age).toBe(26)

    const superman = user
    superman.age = 1000;
    expect(user.age).toBe(1000)
})

test('array test', ()=> {
    let users = [
        {name: 'Ali', age: 32},     // user[0]
        {name: 'Alik', age: 32}      // user[1]
    ]

    let admins = users

    admins.push({name: "Bandit", age: 10})
    //Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.

    expect(users[2]).toEqual({name: "Bandit", age: 10})
})

test('array type test', () => {
    let users = [
        { name: 'Dimych', age: 25 },    
        { name: 'Dimych', age: 32 },
        { name: "Bandit", age: 10 }      
    ]

    let admins = users

    admins.push({name: "Bandit", age: 10})
    expect(users[2]).toEqual(
        {name: "Bandit", age: 10}
    )
})

test('reference type2 test', ()=> {
    const address = {
        title: "Minsk"
    }

    var user: UserType = {
        name: "Ali",
        age: 32,
        address: address
    }
    var user2: UserType = {
        name: "Ali",
        age: 30,
        address: address
    }

    address.title = "Minsk City"
    expect(user.address).toBe(user2.address)
    expect(user.address?.title).toBe("Minsk City")
})

test('reference array2 test', ()=> {
    const address = {
        title: "Minsk"
    }
    var user: UserType = {
        name: "Ali", age: 25, address: address
    }
    var user2: UserType = {
        name: "Ali", age: 26, address: address
    }

    const users = [ user, user2,
        { name: "Misha", 
           age: 4, 
           address
        } 
    ]

    const admins = [ user, user2 ]
    admins[0].name = "Ali"

    expect(users[0].name).toBe("Ali")
    expect(user.name).toBe("Ali")
})