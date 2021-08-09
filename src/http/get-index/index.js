const Main = require('@architect/views/main.js')
const arc = require('@architect/functions')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Bertis Mauricio Alas Hernandez', // ←  Start by adding your name!
    title: 'Online Marketing!',
    occupation: 'Online Marketing-Entrepreneur',
    location: 'USA, MT',
    bio: 'Entrepreneur and creative. Digital Marketing and transportation logistic.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'marketingenterprise2021@gmail.com',
    twitter: 'https://mobile.twitter.com/AlasBertis',
    linkedin: 'https://www.linkedin.com/in/bertis-',
    instagram: 'https://www.instagram.com/misheard2021/',
    facebook: 'https://www.facebook.com/profile.php?id=100009619814662',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: arc.static('background.jpg', {stagePath: false})
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
