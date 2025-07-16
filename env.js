// //  export const PORT =isNaN(process.env.PORT)? 3000 :parseInt(process.env.PORT);

// import {z} from 'zod';

// const ageSchema=z.number().min(18).max(100).int();
// const userAge=17;

// const parseUserAge=ageSchema.parse(userAge);
// console.log(parseUserAge);


import { z} from 'zod';

export const portSchema = z.coerce.number().min(1).max(65535).default(3000); // the coerce method is used to convert string to number if it is in the double quotes
export const PORT =portSchema.parse(process.env.PORT);