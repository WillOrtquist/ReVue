/* eslint-disable no-unused-vars */
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
/* eslint-disable no-unused-vars */

import ReviewList from './pages/reviews/ReviewList.vue';
import ReviewDetail from './pages/reviews/ReviewDetail.vue';
import ArtistList from './pages/artists/ArtistList.vue';
import ArtistDetail from './pages/artists/ArtistDetail.vue';
import ContributorList from './pages/contributors/ContributorList.vue';
import ContributorDetail from './pages/contributors/ContributorDetail.vue';
import MessageContributor from './pages/contributors/MessageContributor.vue';
import MessagesReceived from './pages/contributors/MessagesReceived.vue';
import ContributorSubmit from './pages/contributors/MessagesReceived.vue';
import ContributorLogin from './pages/contributors/MessagesReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    // Will likely have an admin/login path, as well as an admin/submit path
    routes: [
        {
            path: '/',
            redirect: '/reviews' }, // could use as home landing page
        {
            path: '/reviews',
            component: ReviewList },
        {
            path: '/reviews/:id',
            component: ReviewDetail
        },
        {
            path: '/artists',
            component: ArtistList
        },
        {
            path: '/artists/:id',
            component: ArtistDetail
        },
        {
            path: '/contributors',
            component: ContributorList
        },
        {
            path: '/contributors/id',
            component: ContributorDetail,
            children: [
                {
                    path: 'message',
                    component: MessageContributor
                },
                {
                    path: 'messagesRecieved',
                    component: MessagesReceived
                },
                {
                    path: 'login',
                    component: ContributorLogin
                },
                {
                    path: 'submit',
                    component: ContributorSubmit
                }
            ]
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }, // regex for any invalid path .*
    ],
});

export default router;