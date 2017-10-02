import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Casino from '@/components/Casino'

import Contact from '@/components/Contact'
import Disclaimer from '@/components/Disclaimer'
import Duty from '@/components/Duty'
import Help from '@/components/Help'

import Join from '@/components/Join'
import Live from '@/components/Live'
import Lottery from '@/components/Lottery'
import PersonalBettin from '@/components/person/PersonalBettin'

import PersonalCallin from '@/components/person/PersonalCallin'
import PersonalCallinEdit from '@/components/person/PersonalCallinEdit'
import PersonalCallin1 from '@/components/person/PersonalCallin1'
import PersonalDeposit from '@/components/person/PersonalDeposit'

import PersonalDeposit11 from '@/components/person/PersonalDeposit11'
import PersonalFunds from '@/components/person/PersonalFunds'
import PersonalInfo from '@/components/person/PersonalInfo'
import PersonalModifyPassword from '@/components/person/PersonalModifyPassword'

import PersonalMsg from '@/components/person/PersonalMsg'
import Policy from '@/components/Policy'
import Promo from '@/components/Promo'
import SignUp from '@/components/SignUp'

import Sports from '@/components/Sports'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/casino',
      name: 'Casino',
      component: Casino
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: Disclaimer
    },
    {
      path: '/duty',
      name: 'Duty',
      component: Duty
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/lottery',
      name: 'Lottery',
      component: Lottery
    },
    {
      path: '/personalBettin',
      name: 'PersonalBettin',
      component: PersonalBettin
    },

    {
      path: '/personalCallin',
      name: 'PersonalCallin',
      component: PersonalCallin
    },
    {
      path: '/personalCallin_edit',
      name: 'PersonalCallinEdit',
      component: PersonalCallinEdit
    },
    {
      path: '/personalCallin1',
      name: 'PersonalCallin1',
      component: PersonalCallin1
    },
    {
      path: '/personalDeposit',
      name: 'PersonalDeposit',
      component: PersonalDeposit
    },

    {
      path: '/personalDeposit1_1',
      name: 'PersonalDeposit11',
      component: PersonalDeposit11
    },
    {
      path: '/personalFunds',
      name: 'PersonalFunds',
      component: PersonalFunds
    },
    {
      path: '/personalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      path: '/personalModifyPassword',
      name: 'PersonalModifyPassword',
      component: PersonalModifyPassword
    },

    {
      path: '/personalMsg',
      name: 'PersonalMsg',
      component: PersonalMsg
    },
    {
      path: '/policy',
      name: 'Policy',
      component: Policy
    },
    {
      path: '/promo',
      name: 'Promo',
      component: Promo
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/sports',
      name: 'Sports',
      component: Sports
    }

  ]
})
