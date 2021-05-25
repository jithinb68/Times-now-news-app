import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        newsFeeds: [],
        filteredNewsFeeds: [],
        sectionLists: [],
        isFeedLoading: true,
        filterParam: '',
        readLaterFeeds: [],
        profileDetails: {
          name: '',
          email: '',
          password: ''
        }
    },
    mutations: {
        setNewsFeed(state, feeds){
            state.newsFeeds = feeds;
        },
        setFilteredNewsFeeds(state, feeds){
          state.filteredNewsFeeds = feeds;
        },
        setSectionsList(state, lists){
          state.sectionLists = lists;
        },
        setIsFeedLoading(state, payLoad){
          state.isFeedLoading = payLoad;
        },
        setFilterParam(state, param){
          state.filterParam = param;
        },
        pushToReadLater(state, feed){
          state.readLaterFeeds.push(feed);
        },
    },
    actions: {
        getNewsFeed({commit}){
          return new Promise((resolve, reject) => {
            axios({url: 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7', method: 'GET' })
            .then(resp => {
              let newsFeeds =  resp.data.results;
              newsFeeds = newsFeeds.map((feed) => {
                feed['readLater'] = false;
                return feed;
              });
              commit('setNewsFeed', newsFeeds);
              commit('setFilteredNewsFeeds', newsFeeds);
              commit('setIsFeedLoading', false);
              commit('setFilterParam', '');
              return resolve();
            })
            .catch(err => {
              console.log(err);
              return reject()
            })
          })
        },
        getSectionList({commit}) {
          axios({url: 'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=uR1j3A82i48Cvvn6A4pQRWBCIhUCIvG7', method: 'GET' })
          .then(resp => {
            commit('setSectionsList', resp.data.results);
            this.sectionLists =  resp.data.results;
          })
          .catch(err => {
            console.log(err);
          })
        },
        filterNewsFeed(context, selectedSection){
          context.commit('setIsFeedLoading', true);
          context.commit('setFilterParam', selectedSection);
          let filteredFeed = context.state.newsFeeds.filter((feed) =>   {
            return feed.section === selectedSection;
          });
          context.commit('setFilteredNewsFeeds', filteredFeed);
          context.commit('setIsFeedLoading', false);
        },
        resetFilter(context) {
          context.commit('setFilteredNewsFeeds', context.state.newsFeeds);
          context.commit('setFilterParam', '');
        },
        toggleReadLater(context, payLoad) {
          context.state.filteredNewsFeeds[payLoad.index].readLater = !context.state.filteredNewsFeeds[payLoad.index].readLater;
          if(context.state.filteredNewsFeeds[payLoad.index].readLater) {
            context.commit('pushToReadLater',  payLoad.feed);
          } else {
            context.state.readLaterFeeds = context.state.readLaterFeeds.filter((feed) => {
              return feed.slug_name !== payLoad.feed.slug_name;
            })
          }
        },
        removeFromReadLater(context, payLoad) {
          context.state.readLaterFeeds = context.state.readLaterFeeds.filter((feed) => {
            return feed.slug_name !== payLoad.slug_name;
          })
          context.state.filteredNewsFeeds.forEach((feed) => {
            if(feed.slug_name === payLoad.slug_name) {
              feed.readLater = !feed.readLater;
            }
          })
        },
        populateProfileValues(context) {
          context.state.profileDetails.name = (localStorage.getItem('name'));
          context.state.profileDetails.email = (localStorage.getItem('email'));
          context.state.profileDetails.password = (localStorage.getItem('password'));
        },
        removeProfileDetails(context) {
          context.state.profileDetails.name = {
            name: '',
            email: '',
            password: ''
          }
        },
        changeProfileDetails(context, payLoad) {
          context.state.profileDetails = {
            name: payLoad.name,
            email: payLoad.email,
            password: payLoad.password
          }
          context.dispatch('setLocalStorage', context.state.profileDetails);
        },
        setLocalStorage(context, payLoad) {
          localStorage.setItem("name", payLoad.name);
          localStorage.setItem("email", payLoad.email);
          localStorage.setItem("password", payLoad.password);
        }
    }
})