/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as AllProducts} from './allproducts'
export {default as CandyDisplay} from './candydisplay'
export {default as SingleProduct} from './singleProduct'
export {default as AdminDash} from './adminDash'
export {default as UserDisplay} from './userDisplay'
export {default as CartDisplay} from './cartDisplay'
export {default as SingleCandyCart} from './singleCandyCart'
