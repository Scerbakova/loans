export class Person {
  constructor(
    public name: string,
    public owes: Amount,
    public lent: Amount,
  ) {}
}

export class Amount {
  constructor(
    public totalAmount: number,
    public amountToOnePerson: AmountAndPerson[]
  ) {}
}

export class AmountAndPerson {
  constructor(public amount: number, public name: string) {}
}
