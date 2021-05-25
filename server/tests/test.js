const tap = require('tap')
const request = require('request')
const fastify = require('../index')

tap.test('GET /posts route', t => {

    t.plan(5)
    t.teardown(() => fastify.close())

    request({
        method: 'GET',
        url: 'http://localhost:8080/api/posts'
        }, (err, response, body) => {
        t.error(err)
        t.equal(response.statusCode, 200)
        t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
        const testPost = JSON.parse(body).find(item => item.description === 'sfafsafsafваа');
        t.equal(testPost.postId, '68209cc7-6245-47c3-8aa1-53798cf74086')
        t.equal(testPost.title, 'safafsfa')
    })

})

tap.test('POST /posts/add route', t => {

    t.plan(3)
    t.teardown(() => fastify.close())

    const post = {
        type: 2,
        title: 'Test title',
        description: 'Test description',
        district: null,
        address: null,
        ownerPhone: null,
        price: null,
        originLink: null
    }

    request({
        method: 'POST',
        url: 'http://localhost:8080/api/posts/add',
        body: JSON.stringify(post),
        headers: {
			'Content-Type': 'application/json'
		},
        }, (err, response, body) => {
        t.error(err)
        t.equal(response.statusCode, 200)
        const data = JSON.parse(response.request.body);
        t.equal(data.title, 'Test title')
    })

})


tap.test('If the post is really created', t => {

    t.plan(6)
    t.teardown(() => fastify.close())

    request({
        method: 'GET',
        url: 'http://localhost:8080/api/posts',
        }, (err, response, body) => {
        t.error(err)
        t.equal(response.statusCode, 200)
        const post = JSON.parse(body)[0];
        t.equal(post.type, 2)
        t.equal(post.title, 'Test title')
        t.type(post.description, 'string')
        t.equal(post.description, 'Test description')
    })

})
