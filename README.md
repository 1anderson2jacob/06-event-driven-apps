![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## 06-event-driven-apps

### Author: Jacob Anderson

### Links and Resources
* [repo](https://github.com/1anderson2jacob/06-event-driven-apps/pull/1)
* [travis](https://www.travis-ci.com/1anderson2jacob/06-event-driven-apps)

### Modules
#### `event.js`
#### `logger.js`

##### Exported Values and Methods

###### `alterFile(file)`
used in app.js to alter file. Reads, converts buffer to text, then writes

###### `events`
pulls in node events

###### `logger.save`
used as a callback in an event listener, listening for 'file-save'

###### `logger.err`
used as a callback in an event listener, listening for 'file-error'

### Setup

#### Running the app
* `node app.js`
* Endpoint: ` <file-name>`
  * Rewrites the target file in all caps.

#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events
