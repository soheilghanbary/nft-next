export interface UserProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  maidenName: string;
  image: string;
  username: string;
  bloodGroup: string;
  phone: string;
  age: string;
  gender: string;
  domain: string;
  company: {
    address: {
      address: string;
      city: string;
      postalCode: string;
    };
    department: string;
    name: string;
    title: string;
  };
}
