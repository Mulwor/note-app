import { student } from './01.About_me';
import { city } from './02.Building';

describe("About me", () => {
    test("Your name should be correct", () => {
        expect(student.name).toBe("Ali")
    })
    test("Your age should be correct", () => {
        expect(student.age).toBe(25)
    })
    test("Your address should be correct", () => {
        expect(student.address.city.title).toBe("Azerbaijan")
    })
    test("Your tecnology should be correct", () => {
        expect(student.technologies[0].title).toBe("HTML")
        expect(student.technologies[2].title).toBe("React")
    })
})

test("test city should contains 3 houses",() => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White Street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street");
})

test ('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL' );
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Str");

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION' );
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe("South Str");
})