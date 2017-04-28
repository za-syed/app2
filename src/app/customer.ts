export class Customer {
  constructor(
    public customerID: string,
    public contactName: string,
    public contactTitle: string,
    public country: string,
    public phone?: string,
    public address?: string,
    public state?: string,
    public city?: string,
    public zip?: string    
  ) {  }
}
