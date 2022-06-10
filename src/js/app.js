import 'normalize.css/normalize.css'
import '../sass/style.sass'
import 'popper.js'
import 'bootstrap'
import { importAll } from './functions.js'
import './test'

// import all media from public
importAll(
  require.context(
    '../../public',
    true,
    /\.(png|svg|jpg|jpe?g|gif|mov|mp4|ico|webmanifest|xml)$/
  )
)

console.log("hello")
$('.terminal').addClass('hi')
