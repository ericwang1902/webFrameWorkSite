





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d876e21057f406b37686f3dc7b9666f5957cda4847a48ec11e040df065624617.css" integrity="sha256-2HbiEFf0BrN2hvPce5Zm9ZV82khHpI7BHgQN8GViRhc=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-05196ad2eeaad9504e7bb3adc33d4d19adc2bad851a35ed9b9b0f73702c554f5.css" integrity="sha256-BRlq0u6q2VBOe7Otwz1NGa3CuthRo17ZubD3NwLFVPU=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>vue-address/address.vue at master · WebCodeFarmer/vue-address</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">


  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTQ1NTgxNTkxOmI4M2Y1M2FiMzY2YWQ4Y2JkMzY4NzdhNjI1NGI3ODYzMzJiYTQ4NTRmYzkxZjhlNmExZWZmZmE2YjM5ZDI4NzM=--c2c916d80990e80d51618ecc01bd8d49f819d1a6">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F236:7C2D:339A2EF:5363D30:58B3F3BF" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="F236:7C2D:339A2EF:5363D30:58B3F3BF" name="octolytics-dimension-request_id" /><meta content="7867163" name="octolytics-actor-id" /><meta content="ericwang1902" name="octolytics-actor-login" /><meta content="d5d2ca181979764bcc4dc49ae3b3e04cc639ba3e443df7c2b1d46828622b5292" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



      <meta name="hostname" content="github.com">
  <meta name="user-login" content="ericwang1902">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="MGMwN2U5NzViYzM3MzM1OWVlMzZjM2EzNTMwNDViNTc3ZTRlYTMwZjY2NzJlNzk5YzFkZTU5MzE1Y2Y0NTIxZnx7InJlbW90ZV9hZGRyZXNzIjoiNjEuMTc3LjIwMC4yNTQiLCJyZXF1ZXN0X2lkIjoiRjIzNjo3QzJEOjMzOUEyRUY6NTM2M0QzMDo1OEIzRjNCRiIsInRpbWVzdGFtcCI6MTQ4ODE4ODM2MCwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="3fd293b3efdae5409ec5f35c6af7fa6d1dff474b">

  <meta http-equiv="x-pjax-version" content="d315960581ecedf86906f3f215b9732a">
  

    
  <meta name="description" content="vue-address - 多级联动地址选择器">
  <meta name="go-import" content="github.com/WebCodeFarmer/vue-address git https://github.com/WebCodeFarmer/vue-address.git">

  <meta content="18495604" name="octolytics-dimension-user_id" /><meta content="WebCodeFarmer" name="octolytics-dimension-user_login" /><meta content="75705084" name="octolytics-dimension-repository_id" /><meta content="WebCodeFarmer/vue-address" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="75705084" name="octolytics-dimension-repository_network_root_id" /><meta content="WebCodeFarmer/vue-address" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/WebCodeFarmer/vue-address/commits/master.atom" rel="alternate" title="Recent Commits to vue-address:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/WebCodeFarmer/vue-address/blob/master/src/components/address.vue" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production windows vis-public page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <div class="header" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/WebCodeFarmer/vue-address/search" class="js-site-search-form" data-scoped-search-url="/WebCodeFarmer/vue-address/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:7867163" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <svg aria-hidden="true" class="octicon octicon-bell float-left" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="WebCodeFarmer/vue-address">This repository</span>
  </div>
    <a class="dropdown-item" href="/WebCodeFarmer/vue-address/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/ericwang1902"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@ericwang1902" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/7867163?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">ericwang1902</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/ericwang1902" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/ericwang1902?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="uPc+H0RgIRaFBpogs64DX8EqMbFUgExllnETYj9s7nFK80mlNSSCPNCA/Sv7n5Fd/VB3kLDxwaH2mwn+aiAQDw==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3b28oWIrBxNuNKiezOiIupqCBfTQ9E7U/cuzbnyvl+QvucsbE2+kOTuyz5WE2Rq4pvhD1TSFwxCdIanyKeNpmg==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>
    
  </div>
</div>


      

  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
      <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      


<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+ZeU5xU9+feR2YpNchojFMynDYThndLsr312cteXBT+xwcZDytlc0bC9/1wfPxLOEtu1+M6sa80dE6+aWZlTQw==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="75705084" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/WebCodeFarmer/vue-address/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/WebCodeFarmer/vue-address/watchers"
            aria-label="1 user is watching this repository">
            1
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container on">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/WebCodeFarmer/vue-address/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RG9JSyXy11r2FJUHk0BMDSUIBtagJSY/pEL1r174rVZzfbFytPFbujVOW+otV56tOH75sI0Ritc3jJeqjGO5ww==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar WebCodeFarmer/vue-address"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/WebCodeFarmer/vue-address/stargazers"
           aria-label="2 users starred this repository">
          2
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/WebCodeFarmer/vue-address/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="h3nISmO29slWatAX50CGmibmYSIMeij/p8EHwgDGZPEfFLiAcUO1fHkQTHNBl5vjxSpun+cdNTgB/a6b7qx5VA==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star WebCodeFarmer/vue-address"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/WebCodeFarmer/vue-address/stargazers"
           aria-label="2 users starred this repository">
          2
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of WebCodeFarmer/vue-address to your account"
              aria-label="Fork your own copy of WebCodeFarmer/vue-address to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/WebCodeFarmer/vue-address/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/WebCodeFarmer/vue-address/network" class="social-count"
       aria-label="2 users forked this repository">
      2
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/WebCodeFarmer" class="url fn" rel="author">WebCodeFarmer</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/WebCodeFarmer/vue-address" data-pjax="#js-repo-pjax-container">vue-address</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/WebCodeFarmer/vue-address" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /WebCodeFarmer/vue-address" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/WebCodeFarmer/vue-address/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /WebCodeFarmer/vue-address/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/WebCodeFarmer/vue-address/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /WebCodeFarmer/vue-address/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/WebCodeFarmer/vue-address/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /WebCodeFarmer/vue-address/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/WebCodeFarmer/vue-address/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /WebCodeFarmer/vue-address/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/WebCodeFarmer/vue-address/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /WebCodeFarmer/vue-address/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/WebCodeFarmer/vue-address/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /WebCodeFarmer/vue-address/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/WebCodeFarmer/vue-address/blob/007c4bfb497cd36e2559884f83f7f36a1805fd92/src/components/address.vue" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:fd211ba5ed2e3accfc2e191530f86bda -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/WebCodeFarmer/vue-address/blob/master/src/components/address.vue"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/WebCodeFarmer/vue-address/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/WebCodeFarmer/vue-address"><span>vue-address</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/WebCodeFarmer/vue-address/tree/master/src"><span>src</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/WebCodeFarmer/vue-address/tree/master/src/components"><span>components</span></a></span><span class="separator">/</span><strong class="final-path">address.vue</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/WebCodeFarmer/vue-address/commit/295886a0a2d0837e4ffffafa470f345594354d0a" data-pjax>
          295886a
        </a>
        <relative-time datetime="2016-12-06T09:30:22Z">Dec 6, 2016</relative-time>
      </span>
      <div>
        <img alt="@WebCodeFarmer" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/18495604?v=3&amp;s=40" width="20" />
        <a href="/WebCodeFarmer" class="user-mention" rel="author">WebCodeFarmer</a>
          <a href="/WebCodeFarmer/vue-address/commit/295886a0a2d0837e4ffffafa470f345594354d0a" class="message" data-pjax="true" title="123">123</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@WebCodeFarmer" height="24" src="https://avatars2.githubusercontent.com/u/18495604?v=3&amp;s=48" width="24" />
            <a href="/WebCodeFarmer">WebCodeFarmer</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/WebCodeFarmer/vue-address/raw/master/src/components/address.vue" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/WebCodeFarmer/vue-address/blame/master/src/components/address.vue" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/WebCodeFarmer/vue-address/commits/master/src/components/address.vue" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/WebCodeFarmer/vue-address?branch=master&amp;filepath=src%2Fcomponents%2Faddress.vue"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/WebCodeFarmer/vue-address/edit/master/src/components/address.vue" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="KyqajFOS0t/CNRiwNWRGtS5Ji6LrT3nwqEJIBqLm+ZP1EgUczUvaLn7R51dZS2kHd8pvXRYLOWY60BRzLvTiTw==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/WebCodeFarmer/vue-address/delete/master/src/components/address.vue" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0ngjiNnHqBsNJVaBHrik4WlOZs9qQJWHDeU22hQcXQ5Ak/tm/2uEGZDCXog7XKXB3bhJoJ1ysqbaY6m+Mnn2yg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      125 lines (110 sloc)
      <span class="file-info-divider"></span>
    48 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-vue">
      <table class="highlight tab-size js-file-line-container" data-tab-size="2">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">&lt;!--</span> 地址选择组件 <span class="pl-c">--&gt;</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">template</span>&gt;</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">	&lt;<span class="pl-ent">el-form</span> :<span class="pl-e">model</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span>form<span class="pl-pds">&#39;</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">&#39;</span>demo-ruleForm<span class="pl-pds">&#39;</span></span> :<span class="pl-e">rules</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span>rules<span class="pl-pds">&#39;</span></span> <span class="pl-e">ref</span>=<span class="pl-s"><span class="pl-pds">&#39;</span>form<span class="pl-pds">&#39;</span></span> <span class="pl-e">label-position</span>=<span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">		&lt;<span class="pl-ent">el-row</span> :<span class="pl-e">gutter</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-c1">20</span><span class="pl-pds">&#39;</span></span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">&#39;</span>address<span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">			&lt;<span class="pl-ent">el-col</span> :<span class="pl-e">span</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-c1">5</span><span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">				&lt;<span class="pl-ent">el-form-item</span> <span class="pl-e">prop</span>=<span class="pl-s"><span class="pl-pds">&#39;</span>province<span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">					&lt;<span class="pl-ent">el-select</span> <span class="pl-e">v-model</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-smi">form</span>.<span class="pl-smi">province</span><span class="pl-pds">&#39;</span></span> <span class="pl-e">placeholder</span>=<span class="pl-s"><span class="pl-pds">&#39;</span>请输入省<span class="pl-pds">&#39;</span></span> @<span class="pl-e">change</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span>proChange<span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">						&lt;<span class="pl-ent">el-option</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">								<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span>item <span class="pl-k">in</span> provinces<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">								:<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-smi">item</span>.<span class="pl-c1">value</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">								:<span class="pl-e">value</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-smi">item</span>.<span class="pl-c1">value</span><span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">						&lt;/<span class="pl-ent">el-option</span>&gt;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">					&lt;/<span class="pl-ent">el-select</span>&gt;</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">				&lt;/<span class="pl-ent">el-form-item</span>&gt;</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">			&lt;/<span class="pl-ent">el-col</span>&gt;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">			&lt;<span class="pl-ent">el-col</span> :<span class="pl-e">span</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-c1">5</span><span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">				&lt;<span class="pl-ent">el-form-item</span> <span class="pl-e">prop</span>=<span class="pl-s"><span class="pl-pds">&#39;</span>city<span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">					&lt;<span class="pl-ent">el-select</span> <span class="pl-e">v-model</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-smi">form</span>.<span class="pl-smi">city</span><span class="pl-pds">&#39;</span></span> <span class="pl-e">placeholder</span>=<span class="pl-s"><span class="pl-pds">&#39;</span>请输入市<span class="pl-pds">&#39;</span></span> @<span class="pl-e">change</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span>cityChange<span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">						&lt;<span class="pl-ent">el-option</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">								<span class="pl-e">v-for</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span>item <span class="pl-k">in</span> citys<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">								:<span class="pl-e">key</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-smi">item</span>.<span class="pl-c1">value</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">								:<span class="pl-e">value</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-smi">item</span>.<span class="pl-c1">value</span><span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">						&lt;/<span class="pl-ent">el-option</span>&gt;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">					&lt;/<span class="pl-ent">el-select</span>&gt;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">				&lt;/<span class="pl-ent">el-form-item</span>&gt;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">			&lt;/<span class="pl-ent">el-col</span>&gt;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">			&lt;<span class="pl-ent">el-col</span> :<span class="pl-e">span</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-c1">12</span><span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">				&lt;<span class="pl-ent">el-form-item</span> <span class="pl-e">prop</span>=<span class="pl-s"><span class="pl-pds">&#39;</span>detail<span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">					&lt;<span class="pl-ent">el-input</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">							<span class="pl-e">placeholder</span>=<span class="pl-s"><span class="pl-pds">&#39;</span>请填写详细地址<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">							:<span class="pl-e">number</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-c1">true</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">							<span class="pl-e">v-model</span>=<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-smi">form</span>.<span class="pl-smi">detail</span><span class="pl-pds">&#39;</span></span>&gt;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">					&lt;/<span class="pl-ent">el-input</span>&gt;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">				&lt;/<span class="pl-ent">el-form-item</span>&gt;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">			&lt;/<span class="pl-ent">el-col</span>&gt;</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">		&lt;/<span class="pl-ent">el-row</span>&gt;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">	&lt;/<span class="pl-ent">el-form</span>&gt;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">template</span>&gt;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;<span class="pl-ent">script</span>&gt;</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-k">import</span> <span class="pl-smi">Vue</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vue<span class="pl-pds">&#39;</span></span></span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-k">import</span> <span class="pl-smi">Element</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">&#39;</span>element-ui<span class="pl-pds">&#39;</span></span></span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-k">import</span> <span class="pl-s"><span class="pl-pds">&#39;</span>element-ui/lib/theme-default/index.css<span class="pl-pds">&#39;</span></span></span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">const 	addressData = {&#39;北京市&#39;: {&#39;市辖区&#39;: [&#39;东城区&#39;, &#39;西城区&#39;, &#39;朝阳区&#39;, &#39;丰台区&#39;, &#39;石景山区&#39;, &#39;海淀区&#39;, &#39;门头沟区&#39;, &#39;房山区&#39;, &#39;通州区&#39;, &#39;顺义区&#39;, &#39;昌平区&#39;, &#39;大兴区&#39;, &#39;怀柔区&#39;, &#39;平谷区&#39;], &#39;县&#39;: [&#39;密云县&#39;, &#39;延庆县&#39;]}, &#39;天津市&#39;: {&#39;市辖区&#39;: [&#39;和平区&#39;, &#39;河东区&#39;, &#39;河西区&#39;, &#39;南开区&#39;, &#39;河北区&#39;, &#39;红桥区&#39;, &#39;东丽区&#39;, &#39;西青区&#39;, &#39;津南区&#39;, &#39;北辰区&#39;, &#39;武清区&#39;, &#39;宝坻区&#39;, &#39;滨海新区&#39;, &#39;宁河区&#39;, &#39;静海区&#39;], &#39;县&#39;: [&#39;蓟县&#39;]}, &#39;河北省&#39;: {&#39;石家庄市&#39;: [&#39;长安区&#39;, &#39;桥西区&#39;, &#39;新华区&#39;, &#39;井陉矿区&#39;, &#39;裕华区&#39;, &#39;藁城区&#39;, &#39;鹿泉区&#39;, &#39;栾城区&#39;, &#39;井陉县&#39;, &#39;正定县&#39;, &#39;行唐县&#39;, &#39;灵寿县&#39;, &#39;高邑县&#39;, &#39;深泽县&#39;, &#39;赞皇县&#39;, &#39;无极县&#39;, &#39;平山县&#39;, &#39;元氏县&#39;, &#39;赵县&#39;, &#39;晋州市&#39;, &#39;新乐市&#39;], &#39;唐山市&#39;: [&#39;路南区&#39;, &#39;路北区&#39;, &#39;古冶区&#39;, &#39;开平区&#39;, &#39;丰南区&#39;, &#39;丰润区&#39;, &#39;曹妃甸区&#39;, &#39;滦县&#39;, &#39;滦南县&#39;, &#39;乐亭县&#39;, &#39;迁西县&#39;, &#39;玉田县&#39;, &#39;遵化市&#39;, &#39;迁安市&#39;], &#39;秦皇岛市&#39;: [&#39;海港区&#39;, &#39;山海关区&#39;, &#39;北戴河区&#39;, &#39;抚宁区&#39;, &#39;青龙满族自治县&#39;, &#39;昌黎县&#39;, &#39;卢龙县&#39;], &#39;邯郸市&#39;: [&#39;邯山区&#39;, &#39;丛台区&#39;, &#39;复兴区&#39;, &#39;峰峰矿区&#39;, &#39;邯郸县&#39;, &#39;临漳县&#39;, &#39;成安县&#39;, &#39;大名县&#39;, &#39;涉县&#39;, &#39;磁县&#39;, &#39;肥乡县&#39;, &#39;永年县&#39;, &#39;邱县&#39;, &#39;鸡泽县&#39;, &#39;广平县&#39;, &#39;馆陶县&#39;, &#39;魏县&#39;, &#39;曲周县&#39;, &#39;武安市&#39;], &#39;邢台市&#39;: [&#39;桥东区&#39;, &#39;桥西区&#39;, &#39;邢台县&#39;, &#39;临城县&#39;, &#39;内丘县&#39;, &#39;柏乡县&#39;, &#39;隆尧县&#39;, &#39;任县&#39;, &#39;南和县&#39;, &#39;宁晋县&#39;, &#39;巨鹿县&#39;, &#39;新河县&#39;, &#39;广宗县&#39;, &#39;平乡县&#39;, &#39;威县&#39;, &#39;清河县&#39;, &#39;临西县&#39;, &#39;南宫市&#39;, &#39;沙河市&#39;], &#39;保定市&#39;: [&#39;竞秀区&#39;, &#39;莲池区&#39;, &#39;满城区&#39;, &#39;清苑区&#39;, &#39;徐水区&#39;, &#39;涞水县&#39;, &#39;阜平县&#39;, &#39;定兴县&#39;, &#39;唐县&#39;, &#39;高阳县&#39;, &#39;容城县&#39;, &#39;涞源县&#39;, &#39;望都县&#39;, &#39;安新县&#39;, &#39;易县&#39;, &#39;曲阳县&#39;, &#39;蠡县&#39;, &#39;顺平县&#39;, &#39;博野县&#39;, &#39;雄县&#39;, &#39;涿州市&#39;, &#39;安国市&#39;, &#39;高碑店市&#39;], &#39;张家口市&#39;: [&#39;桥东区&#39;, &#39;桥西区&#39;, &#39;宣化区&#39;, &#39;下花园区&#39;, &#39;宣化县&#39;, &#39;张北县&#39;, &#39;康保县&#39;, &#39;沽源县&#39;, &#39;尚义县&#39;, &#39;蔚县&#39;, &#39;阳原县&#39;, &#39;怀安县&#39;, &#39;万全县&#39;, &#39;怀来县&#39;, &#39;涿鹿县&#39;, &#39;赤城县&#39;, &#39;崇礼县&#39;], &#39;承德市&#39;: [&#39;双桥区&#39;, &#39;双滦区&#39;, &#39;鹰手营子矿区&#39;, &#39;承德县&#39;, &#39;兴隆县&#39;, &#39;平泉县&#39;, &#39;滦平县&#39;, &#39;隆化县&#39;, &#39;丰宁满族自治县&#39;, &#39;宽城满族自治县&#39;, &#39;围场满族蒙古族自治县&#39;], &#39;沧州市&#39;: [&#39;新华区&#39;, &#39;运河区&#39;, &#39;沧县&#39;, &#39;青县&#39;, &#39;东光县&#39;, &#39;海兴县&#39;, &#39;盐山县&#39;, &#39;肃宁县&#39;, &#39;南皮县&#39;, &#39;吴桥县&#39;, &#39;献县&#39;, &#39;孟村回族自治县&#39;, &#39;泊头市&#39;, &#39;任丘市&#39;, &#39;黄骅市&#39;, &#39;河间市&#39;], &#39;廊坊市&#39;: [&#39;安次区&#39;, &#39;广阳区&#39;, &#39;固安县&#39;, &#39;永清县&#39;, &#39;香河县&#39;, &#39;大城县&#39;, &#39;文安县&#39;, &#39;大厂回族自治县&#39;, &#39;霸州市&#39;, &#39;三河市&#39;], &#39;衡水市&#39;: [&#39;桃城区&#39;, &#39;枣强县&#39;, &#39;武邑县&#39;, &#39;武强县&#39;, &#39;饶阳县&#39;, &#39;安平县&#39;, &#39;故城县&#39;, &#39;景县&#39;, &#39;阜城县&#39;, &#39;冀州市&#39;, &#39;深州市&#39;], &#39;省直辖县级行政区划&#39;: [&#39;定州市&#39;, &#39;辛集市&#39;]}, &#39;山西省&#39;: {&#39;太原市&#39;: [&#39;小店区&#39;, &#39;迎泽区&#39;, &#39;杏花岭区&#39;, &#39;尖草坪区&#39;, &#39;万柏林区&#39;, &#39;晋源区&#39;, &#39;清徐县&#39;, &#39;阳曲县&#39;, &#39;娄烦县&#39;, &#39;古交市&#39;], &#39;大同市&#39;: [&#39;城区&#39;, &#39;矿区&#39;, &#39;南郊区&#39;, &#39;新荣区&#39;, &#39;阳高县&#39;, &#39;天镇县&#39;, &#39;广灵县&#39;, &#39;灵丘县&#39;, &#39;浑源县&#39;, &#39;左云县&#39;, &#39;大同县&#39;], &#39;阳泉市&#39;: [&#39;城区&#39;, &#39;矿区&#39;, &#39;郊区&#39;, &#39;平定县&#39;, &#39;盂县&#39;], &#39;长治市&#39;: [&#39;城区&#39;, &#39;郊区&#39;, &#39;长治县&#39;, &#39;襄垣县&#39;, &#39;屯留县&#39;, &#39;平顺县&#39;, &#39;黎城县&#39;, &#39;壶关县&#39;, &#39;长子县&#39;, &#39;武乡县&#39;, &#39;沁县&#39;, &#39;沁源县&#39;, &#39;潞城市&#39;], &#39;晋城市&#39;: [&#39;城区&#39;, &#39;沁水县&#39;, &#39;阳城县&#39;, &#39;陵川县&#39;, &#39;泽州县&#39;, &#39;高平市&#39;], &#39;朔州市&#39;: [&#39;朔城区&#39;, &#39;平鲁区&#39;, &#39;山阴县&#39;, &#39;应县&#39;, &#39;右玉县&#39;, &#39;怀仁县&#39;], &#39;晋中市&#39;: [&#39;榆次区&#39;, &#39;榆社县&#39;, &#39;左权县&#39;, &#39;和顺县&#39;, &#39;昔阳县&#39;, &#39;寿阳县&#39;, &#39;太谷县&#39;, &#39;祁县&#39;, &#39;平遥县&#39;, &#39;灵石县&#39;, &#39;介休市&#39;], &#39;运城市&#39;: [&#39;盐湖区&#39;, &#39;临猗县&#39;, &#39;万荣县&#39;, &#39;闻喜县&#39;, &#39;稷山县&#39;, &#39;新绛县&#39;, &#39;绛县&#39;, &#39;垣曲县&#39;, &#39;夏县&#39;, &#39;平陆县&#39;, &#39;芮城县&#39;, &#39;永济市&#39;, &#39;河津市&#39;], &#39;忻州市&#39;: [&#39;忻府区&#39;, &#39;定襄县&#39;, &#39;五台县&#39;, &#39;代县&#39;, &#39;繁峙县&#39;, &#39;宁武县&#39;, &#39;静乐县&#39;, &#39;神池县&#39;, &#39;五寨县&#39;, &#39;岢岚县&#39;, &#39;河曲县&#39;, &#39;保德县&#39;, &#39;偏关县&#39;, &#39;原平市&#39;], &#39;临汾市&#39;: [&#39;尧都区&#39;, &#39;曲沃县&#39;, &#39;翼城县&#39;, &#39;襄汾县&#39;, &#39;洪洞县&#39;, &#39;古县&#39;, &#39;安泽县&#39;, &#39;浮山县&#39;, &#39;吉县&#39;, &#39;乡宁县&#39;, &#39;大宁县&#39;, &#39;隰县&#39;, &#39;永和县&#39;, &#39;蒲县&#39;, &#39;汾西县&#39;, &#39;侯马市&#39;, &#39;霍州市&#39;], &#39;吕梁市&#39;: [&#39;离石区&#39;, &#39;文水县&#39;, &#39;交城县&#39;, &#39;兴县&#39;, &#39;临县&#39;, &#39;柳林县&#39;, &#39;石楼县&#39;, &#39;岚县&#39;, &#39;方山县&#39;, &#39;中阳县&#39;, &#39;交口县&#39;, &#39;孝义市&#39;, &#39;汾阳市&#39;]}, &#39;内蒙古自治区&#39;: {&#39;呼和浩特市&#39;: [&#39;新城区&#39;, &#39;回民区&#39;, &#39;玉泉区&#39;, &#39;赛罕区&#39;, &#39;土默特左旗&#39;, &#39;托克托县&#39;, &#39;和林格尔县&#39;, &#39;清水河县&#39;, &#39;武川县&#39;], &#39;包头市&#39;: [&#39;东河区&#39;, &#39;昆都仑区&#39;, &#39;青山区&#39;, &#39;石拐区&#39;, &#39;白云鄂博矿区&#39;, &#39;九原区&#39;, &#39;土默特右旗&#39;, &#39;固阳县&#39;, &#39;达尔罕茂明安联合旗&#39;], &#39;乌海市&#39;: [&#39;海勃湾区&#39;, &#39;海南区&#39;, &#39;乌达区&#39;], &#39;赤峰市&#39;: [&#39;红山区&#39;, &#39;元宝山区&#39;, &#39;松山区&#39;, &#39;阿鲁科尔沁旗&#39;, &#39;巴林左旗&#39;, &#39;巴林右旗&#39;, &#39;林西县&#39;, &#39;克什克腾旗&#39;, &#39;翁牛特旗&#39;, &#39;喀喇沁旗&#39;, &#39;宁城县&#39;, &#39;敖汉旗&#39;], &#39;通辽市&#39;: [&#39;科尔沁区&#39;, &#39;科尔沁左翼中旗&#39;, &#39;科尔沁左翼后旗&#39;, &#39;开鲁县&#39;, &#39;库伦旗&#39;, &#39;奈曼旗&#39;, &#39;扎鲁特旗&#39;, &#39;霍林郭勒市&#39;], &#39;鄂尔多斯市&#39;: [&#39;东胜区&#39;, &#39;达拉特旗&#39;, &#39;准格尔旗&#39;, &#39;鄂托克前旗&#39;, &#39;鄂托克旗&#39;, &#39;杭锦旗&#39;, &#39;乌审旗&#39;, &#39;伊金霍洛旗&#39;], &#39;呼伦贝尔市&#39;: [&#39;海拉尔区&#39;, &#39;扎赉诺尔区&#39;, &#39;阿荣旗&#39;, &#39;莫力达瓦达斡尔族自治旗&#39;, &#39;鄂伦春自治旗&#39;, &#39;鄂温克族自治旗&#39;, &#39;陈巴尔虎旗&#39;, &#39;新巴尔虎左旗&#39;, &#39;新巴尔虎右旗&#39;, &#39;满洲里市&#39;, &#39;牙克石市&#39;, &#39;扎兰屯市&#39;, &#39;额尔古纳市&#39;, &#39;根河市&#39;], &#39;巴彦淖尔市&#39;: [&#39;临河区&#39;, &#39;五原县&#39;, &#39;磴口县&#39;, &#39;乌拉特前旗&#39;, &#39;乌拉特中旗&#39;, &#39;乌拉特后旗&#39;, &#39;杭锦后旗&#39;], &#39;乌兰察布市&#39;: [&#39;集宁区&#39;, &#39;卓资县&#39;, &#39;化德县&#39;, &#39;商都县&#39;, &#39;兴和县&#39;, &#39;凉城县&#39;, &#39;察哈尔右翼前旗&#39;, &#39;察哈尔右翼中旗&#39;, &#39;察哈尔右翼后旗&#39;, &#39;四子王旗&#39;, &#39;丰镇市&#39;], &#39;兴安盟&#39;: [&#39;乌兰浩特市&#39;, &#39;阿尔山市&#39;, &#39;科尔沁右翼前旗&#39;, &#39;科尔沁右翼中旗&#39;, &#39;扎赉特旗&#39;, &#39;突泉县&#39;], &#39;锡林郭勒盟&#39;: [&#39;二连浩特市&#39;, &#39;锡林浩特市&#39;, &#39;阿巴嘎旗&#39;, &#39;苏尼特左旗&#39;, &#39;苏尼特右旗&#39;, &#39;东乌珠穆沁旗&#39;, &#39;西乌珠穆沁旗&#39;, &#39;太仆寺旗&#39;, &#39;镶黄旗&#39;, &#39;正镶白旗&#39;, &#39;正蓝旗&#39;, &#39;多伦县&#39;], &#39;阿拉善盟&#39;: [&#39;阿拉善左旗&#39;, &#39;阿拉善右旗&#39;, &#39;额济纳旗&#39;]}, &#39;辽宁省&#39;: {&#39;沈阳市&#39;: [&#39;和平区&#39;, &#39;沈河区&#39;, &#39;大东区&#39;, &#39;皇姑区&#39;, &#39;铁西区&#39;, &#39;苏家屯区&#39;, &#39;浑南区&#39;, &#39;沈北新区&#39;, &#39;于洪区&#39;, &#39;辽中县&#39;, &#39;康平县&#39;, &#39;法库县&#39;, &#39;新民市&#39;], &#39;大连市&#39;: [&#39;中山区&#39;, &#39;西岗区&#39;, &#39;沙河口区&#39;, &#39;甘井子区&#39;, &#39;旅顺口区&#39;, &#39;金州区&#39;, &#39;长海县&#39;, &#39;瓦房店市&#39;, &#39;普兰店市&#39;, &#39;庄河市&#39;], &#39;鞍山市&#39;: [&#39;铁东区&#39;, &#39;铁西区&#39;, &#39;立山区&#39;, &#39;千山区&#39;, &#39;台安县&#39;, &#39;岫岩满族自治县&#39;, &#39;海城市&#39;], &#39;抚顺市&#39;: [&#39;新抚区&#39;, &#39;东洲区&#39;, &#39;望花区&#39;, &#39;顺城区&#39;, &#39;抚顺县&#39;, &#39;新宾满族自治县&#39;, &#39;清原满族自治县&#39;], &#39;本溪市&#39;: [&#39;平山区&#39;, &#39;溪湖区&#39;, &#39;明山区&#39;, &#39;南芬区&#39;, &#39;本溪满族自治县&#39;, &#39;桓仁满族自治县&#39;], &#39;丹东市&#39;: [&#39;元宝区&#39;, &#39;振兴区&#39;, &#39;振安区&#39;, &#39;宽甸满族自治县&#39;, &#39;东港市&#39;, &#39;凤城市&#39;], &#39;锦州市&#39;: [&#39;古塔区&#39;, &#39;凌河区&#39;, &#39;太和区&#39;, &#39;黑山县&#39;, &#39;义县&#39;, &#39;凌海市&#39;, &#39;北镇市&#39;], &#39;营口市&#39;: [&#39;站前区&#39;, &#39;西市区&#39;, &#39;鲅鱼圈区&#39;, &#39;老边区&#39;, &#39;盖州市&#39;, &#39;大石桥市&#39;], &#39;阜新市&#39;: [&#39;海州区&#39;, &#39;新邱区&#39;, &#39;太平区&#39;, &#39;清河门区&#39;, &#39;细河区&#39;, &#39;阜新蒙古族自治县&#39;, &#39;彰武县&#39;], &#39;辽阳市&#39;: [&#39;白塔区&#39;, &#39;文圣区&#39;, &#39;宏伟区&#39;, &#39;弓长岭区&#39;, &#39;太子河区&#39;, &#39;辽阳县&#39;, &#39;灯塔市&#39;], &#39;盘锦市&#39;: [&#39;双台子区&#39;, &#39;兴隆台区&#39;, &#39;大洼县&#39;, &#39;盘山县&#39;], &#39;铁岭市&#39;: [&#39;银州区&#39;, &#39;清河区&#39;, &#39;铁岭县&#39;, &#39;西丰县&#39;, &#39;昌图县&#39;, &#39;调兵山市&#39;, &#39;开原市&#39;], &#39;朝阳市&#39;: [&#39;双塔区&#39;, &#39;龙城区&#39;, &#39;朝阳县&#39;, &#39;建平县&#39;, &#39;喀喇沁左翼蒙古族自治县&#39;, &#39;北票市&#39;, &#39;凌源市&#39;], &#39;葫芦岛市&#39;: [&#39;连山区&#39;, &#39;龙港区&#39;, &#39;南票区&#39;, &#39;绥中县&#39;, &#39;建昌县&#39;, &#39;兴城市&#39;]}, &#39;吉林省&#39;: {&#39;长春市&#39;: [&#39;南关区&#39;, &#39;宽城区&#39;, &#39;朝阳区&#39;, &#39;二道区&#39;, &#39;绿园区&#39;, &#39;双阳区&#39;, &#39;九台区&#39;, &#39;农安县&#39;, &#39;榆树市&#39;, &#39;德惠市&#39;], &#39;吉林市&#39;: [&#39;昌邑区&#39;, &#39;龙潭区&#39;, &#39;船营区&#39;, &#39;丰满区&#39;, &#39;永吉县&#39;, &#39;蛟河市&#39;, &#39;桦甸市&#39;, &#39;舒兰市&#39;, &#39;磐石市&#39;], &#39;四平市&#39;: [&#39;铁西区&#39;, &#39;铁东区&#39;, &#39;梨树县&#39;, &#39;伊通满族自治县&#39;, &#39;公主岭市&#39;, &#39;双辽市&#39;], &#39;辽源市&#39;: [&#39;龙山区&#39;, &#39;西安区&#39;, &#39;东丰县&#39;, &#39;东辽县&#39;], &#39;通化市&#39;: [&#39;东昌区&#39;, &#39;二道江区&#39;, &#39;通化县&#39;, &#39;辉南县&#39;, &#39;柳河县&#39;, &#39;梅河口市&#39;, &#39;集安市&#39;], &#39;白山市&#39;: [&#39;浑江区&#39;, &#39;江源区&#39;, &#39;抚松县&#39;, &#39;靖宇县&#39;, &#39;长白朝鲜族自治县&#39;, &#39;临江市&#39;], &#39;松原市&#39;: [&#39;宁江区&#39;, &#39;前郭尔罗斯蒙古族自治县&#39;, &#39;长岭县&#39;, &#39;乾安县&#39;, &#39;扶余市&#39;], &#39;白城市&#39;: [&#39;洮北区&#39;, &#39;镇赉县&#39;, &#39;通榆县&#39;, &#39;洮南市&#39;, &#39;大安市&#39;], &#39;延边朝鲜族自治州&#39;: [&#39;延吉市&#39;, &#39;图们市&#39;, &#39;敦化市&#39;, &#39;珲春市&#39;, &#39;龙井市&#39;, &#39;和龙市&#39;, &#39;汪清县&#39;, &#39;安图县&#39;]}, &#39;黑龙江省&#39;: {&#39;哈尔滨市&#39;: [&#39;道里区&#39;, &#39;南岗区&#39;, &#39;道外区&#39;, &#39;平房区&#39;, &#39;松北区&#39;, &#39;香坊区&#39;, &#39;呼兰区&#39;, &#39;阿城区&#39;, &#39;双城区&#39;, &#39;依兰县&#39;, &#39;方正县&#39;, &#39;宾县&#39;, &#39;巴彦县&#39;, &#39;木兰县&#39;, &#39;通河县&#39;, &#39;延寿县&#39;, &#39;尚志市&#39;, &#39;五常市&#39;], &#39;齐齐哈尔市&#39;: [&#39;龙沙区&#39;, &#39;建华区&#39;, &#39;铁锋区&#39;, &#39;昂昂溪区&#39;, &#39;富拉尔基区&#39;, &#39;碾子山区&#39;, &#39;梅里斯达斡尔族区&#39;, &#39;龙江县&#39;, &#39;依安县&#39;, &#39;泰来县&#39;, &#39;甘南县&#39;, &#39;富裕县&#39;, &#39;克山县&#39;, &#39;克东县&#39;, &#39;拜泉县&#39;, &#39;讷河市&#39;], &#39;鸡西市&#39;: [&#39;鸡冠区&#39;, &#39;恒山区&#39;, &#39;滴道区&#39;, &#39;梨树区&#39;, &#39;城子河区&#39;, &#39;麻山区&#39;, &#39;鸡东县&#39;, &#39;虎林市&#39;, &#39;密山市&#39;], &#39;鹤岗市&#39;: [&#39;向阳区&#39;, &#39;工农区&#39;, &#39;南山区&#39;, &#39;兴安区&#39;, &#39;东山区&#39;, &#39;兴山区&#39;, &#39;萝北县&#39;, &#39;绥滨县&#39;], &#39;双鸭山市&#39;: [&#39;尖山区&#39;, &#39;岭东区&#39;, &#39;四方台区&#39;, &#39;宝山区&#39;, &#39;集贤县&#39;, &#39;友谊县&#39;, &#39;宝清县&#39;, &#39;饶河县&#39;], &#39;大庆市&#39;: [&#39;萨尔图区&#39;, &#39;龙凤区&#39;, &#39;让胡路区&#39;, &#39;红岗区&#39;, &#39;大同区&#39;, &#39;肇州县&#39;, &#39;肇源县&#39;, &#39;林甸县&#39;, &#39;杜尔伯特蒙古族自治县&#39;], &#39;伊春市&#39;: [&#39;伊春区&#39;, &#39;南岔区&#39;, &#39;友好区&#39;, &#39;西林区&#39;, &#39;翠峦区&#39;, &#39;新青区&#39;, &#39;美溪区&#39;, &#39;金山屯区&#39;, &#39;五营区&#39;, &#39;乌马河区&#39;, &#39;汤旺河区&#39;, &#39;带岭区&#39;, &#39;乌伊岭区&#39;, &#39;红星区&#39;, &#39;上甘岭区&#39;, &#39;嘉荫县&#39;, &#39;铁力市&#39;], &#39;佳木斯市&#39;: [&#39;向阳区&#39;, &#39;前进区&#39;, &#39;东风区&#39;, &#39;郊区&#39;, &#39;桦南县&#39;, &#39;桦川县&#39;, &#39;汤原县&#39;, &#39;抚远县&#39;, &#39;同江市&#39;, &#39;富锦市&#39;], &#39;七台河市&#39;: [&#39;新兴区&#39;, &#39;桃山区&#39;, &#39;茄子河区&#39;, &#39;勃利县&#39;], &#39;牡丹江市&#39;: [&#39;东安区&#39;, &#39;阳明区&#39;, &#39;爱民区&#39;, &#39;西安区&#39;, &#39;东宁县&#39;, &#39;林口县&#39;, &#39;绥芬河市&#39;, &#39;海林市&#39;, &#39;宁安市&#39;, &#39;穆棱市&#39;], &#39;黑河市&#39;: [&#39;爱辉区&#39;, &#39;嫩江县&#39;, &#39;逊克县&#39;, &#39;孙吴县&#39;, &#39;北安市&#39;, &#39;五大连池市&#39;], &#39;绥化市&#39;: [&#39;北林区&#39;, &#39;望奎县&#39;, &#39;兰西县&#39;, &#39;青冈县&#39;, &#39;庆安县&#39;, &#39;明水县&#39;, &#39;绥棱县&#39;, &#39;安达市&#39;, &#39;肇东市&#39;, &#39;海伦市&#39;], &#39;大兴安岭地区&#39;: [&#39;呼玛县&#39;, &#39;塔河县&#39;, &#39;漠河县&#39;]}, &#39;上海市&#39;: {&#39;市辖区&#39;: [&#39;黄浦区&#39;, &#39;徐汇区&#39;, &#39;长宁区&#39;, &#39;静安区&#39;, &#39;普陀区&#39;, &#39;闸北区&#39;, &#39;虹口区&#39;, &#39;杨浦区&#39;, &#39;闵行区&#39;, &#39;宝山区&#39;, &#39;嘉定区&#39;, &#39;浦东新区&#39;, &#39;金山区&#39;, &#39;松江区&#39;, &#39;青浦区&#39;, &#39;奉贤区&#39;], &#39;县&#39;: [&#39;崇明县&#39;]}, &#39;江苏省&#39;: {&#39;南京市&#39;: [&#39;玄武区&#39;, &#39;秦淮区&#39;, &#39;建邺区&#39;, &#39;鼓楼区&#39;, &#39;浦口区&#39;, &#39;栖霞区&#39;, &#39;雨花台区&#39;, &#39;江宁区&#39;, &#39;六合区&#39;, &#39;溧水区&#39;, &#39;高淳区&#39;], &#39;无锡市&#39;: [&#39;崇安区&#39;, &#39;南长区&#39;, &#39;北塘区&#39;, &#39;锡山区&#39;, &#39;惠山区&#39;, &#39;滨湖区&#39;, &#39;江阴市&#39;, &#39;宜兴市&#39;], &#39;徐州市&#39;: [&#39;鼓楼区&#39;, &#39;云龙区&#39;, &#39;贾汪区&#39;, &#39;泉山区&#39;, &#39;铜山区&#39;, &#39;丰县&#39;, &#39;沛县&#39;, &#39;睢宁县&#39;, &#39;新沂市&#39;, &#39;邳州市&#39;], &#39;常州市&#39;: [&#39;天宁区&#39;, &#39;钟楼区&#39;, &#39;新北区&#39;, &#39;武进区&#39;, &#39;金坛区&#39;, &#39;溧阳市&#39;], &#39;苏州市&#39;: [&#39;虎丘区&#39;, &#39;吴中区&#39;, &#39;相城区&#39;, &#39;姑苏区&#39;, &#39;吴江区&#39;, &#39;常熟市&#39;, &#39;张家港市&#39;, &#39;昆山市&#39;, &#39;太仓市&#39;], &#39;南通市&#39;: [&#39;崇川区&#39;, &#39;港闸区&#39;, &#39;通州区&#39;, &#39;海安县&#39;, &#39;如东县&#39;, &#39;启东市&#39;, &#39;如皋市&#39;, &#39;海门市&#39;], &#39;连云港市&#39;: [&#39;连云区&#39;, &#39;海州区&#39;, &#39;赣榆区&#39;, &#39;东海县&#39;, &#39;灌云县&#39;, &#39;灌南县&#39;], &#39;淮安市&#39;: [&#39;清河区&#39;, &#39;淮安区&#39;, &#39;淮阴区&#39;, &#39;清浦区&#39;, &#39;涟水县&#39;, &#39;洪泽县&#39;, &#39;盱眙县&#39;, &#39;金湖县&#39;], &#39;盐城市&#39;: [&#39;亭湖区&#39;, &#39;盐都区&#39;, &#39;大丰区&#39;, &#39;响水县&#39;, &#39;滨海县&#39;, &#39;阜宁县&#39;, &#39;射阳县&#39;, &#39;建湖县&#39;, &#39;东台市&#39;], &#39;扬州市&#39;: [&#39;广陵区&#39;, &#39;邗江区&#39;, &#39;江都区&#39;, &#39;宝应县&#39;, &#39;仪征市&#39;, &#39;高邮市&#39;], &#39;镇江市&#39;: [&#39;京口区&#39;, &#39;润州区&#39;, &#39;丹徒区&#39;, &#39;丹阳市&#39;, &#39;扬中市&#39;, &#39;句容市&#39;], &#39;泰州市&#39;: [&#39;海陵区&#39;, &#39;高港区&#39;, &#39;姜堰区&#39;, &#39;兴化市&#39;, &#39;靖江市&#39;, &#39;泰兴市&#39;], &#39;宿迁市&#39;: [&#39;宿城区&#39;, &#39;宿豫区&#39;, &#39;沭阳县&#39;, &#39;泗阳县&#39;, &#39;泗洪县&#39;]}, &#39;浙江省&#39;: {&#39;杭州市&#39;: [&#39;上城区&#39;, &#39;下城区&#39;, &#39;江干区&#39;, &#39;拱墅区&#39;, &#39;西湖区&#39;, &#39;滨江区&#39;, &#39;萧山区&#39;, &#39;余杭区&#39;, &#39;富阳区&#39;, &#39;桐庐县&#39;, &#39;淳安县&#39;, &#39;建德市&#39;, &#39;临安市&#39;], &#39;宁波市&#39;: [&#39;海曙区&#39;, &#39;江东区&#39;, &#39;江北区&#39;, &#39;北仑区&#39;, &#39;镇海区&#39;, &#39;鄞州区&#39;, &#39;象山县&#39;, &#39;宁海县&#39;, &#39;余姚市&#39;, &#39;慈溪市&#39;, &#39;奉化市&#39;], &#39;温州市&#39;: [&#39;鹿城区&#39;, &#39;龙湾区&#39;, &#39;瓯海区&#39;, &#39;洞头区&#39;, &#39;永嘉县&#39;, &#39;平阳县&#39;, &#39;苍南县&#39;, &#39;文成县&#39;, &#39;泰顺县&#39;, &#39;瑞安市&#39;, &#39;乐清市&#39;], &#39;嘉兴市&#39;: [&#39;南湖区&#39;, &#39;秀洲区&#39;, &#39;嘉善县&#39;, &#39;海盐县&#39;, &#39;海宁市&#39;, &#39;平湖市&#39;, &#39;桐乡市&#39;], &#39;湖州市&#39;: [&#39;吴兴区&#39;, &#39;南浔区&#39;, &#39;德清县&#39;, &#39;长兴县&#39;, &#39;安吉县&#39;], &#39;绍兴市&#39;: [&#39;越城区&#39;, &#39;柯桥区&#39;, &#39;上虞区&#39;, &#39;新昌县&#39;, &#39;诸暨市&#39;, &#39;嵊州市&#39;], &#39;金华市&#39;: [&#39;婺城区&#39;, &#39;金东区&#39;, &#39;武义县&#39;, &#39;浦江县&#39;, &#39;磐安县&#39;, &#39;兰溪市&#39;, &#39;义乌市&#39;, &#39;东阳市&#39;, &#39;永康市&#39;], &#39;衢州市&#39;: [&#39;柯城区&#39;, &#39;衢江区&#39;, &#39;常山县&#39;, &#39;开化县&#39;, &#39;龙游县&#39;, &#39;江山市&#39;], &#39;舟山市&#39;: [&#39;定海区&#39;, &#39;普陀区&#39;, &#39;岱山县&#39;, &#39;嵊泗县&#39;], &#39;台州市&#39;: [&#39;椒江区&#39;, &#39;黄岩区&#39;, &#39;路桥区&#39;, &#39;玉环县&#39;, &#39;三门县&#39;, &#39;天台县&#39;, &#39;仙居县&#39;, &#39;温岭市&#39;, &#39;临海市&#39;], &#39;丽水市&#39;: [&#39;莲都区&#39;, &#39;青田县&#39;, &#39;缙云县&#39;, &#39;遂昌县&#39;, &#39;松阳县&#39;, &#39;云和县&#39;, &#39;庆元县&#39;, &#39;景宁畲族自治县&#39;, &#39;龙泉市&#39;]}, &#39;安徽省&#39;: {&#39;合肥市&#39;: [&#39;瑶海区&#39;, &#39;庐阳区&#39;, &#39;蜀山区&#39;, &#39;包河区&#39;, &#39;长丰县&#39;, &#39;肥东县&#39;, &#39;肥西县&#39;, &#39;庐江县&#39;, &#39;巢湖市&#39;], &#39;芜湖市&#39;: [&#39;镜湖区&#39;, &#39;弋江区&#39;, &#39;鸠江区&#39;, &#39;三山区&#39;, &#39;芜湖县&#39;, &#39;繁昌县&#39;, &#39;南陵县&#39;, &#39;无为县&#39;], &#39;蚌埠市&#39;: [&#39;龙子湖区&#39;, &#39;蚌山区&#39;, &#39;禹会区&#39;, &#39;淮上区&#39;, &#39;怀远县&#39;, &#39;五河县&#39;, &#39;固镇县&#39;], &#39;淮南市&#39;: [&#39;大通区&#39;, &#39;田家庵区&#39;, &#39;谢家集区&#39;, &#39;八公山区&#39;, &#39;潘集区&#39;, &#39;凤台县&#39;], &#39;马鞍山市&#39;: [&#39;花山区&#39;, &#39;雨山区&#39;, &#39;博望区&#39;, &#39;当涂县&#39;, &#39;含山县&#39;, &#39;和县&#39;], &#39;淮北市&#39;: [&#39;杜集区&#39;, &#39;相山区&#39;, &#39;烈山区&#39;, &#39;濉溪县&#39;], &#39;铜陵市&#39;: [&#39;铜官山区&#39;, &#39;狮子山区&#39;, &#39;郊区&#39;, &#39;铜陵县&#39;], &#39;安庆市&#39;: [&#39;迎江区&#39;, &#39;大观区&#39;, &#39;宜秀区&#39;, &#39;怀宁县&#39;, &#39;枞阳县&#39;, &#39;潜山县&#39;, &#39;太湖县&#39;, &#39;宿松县&#39;, &#39;望江县&#39;, &#39;岳西县&#39;, &#39;桐城市&#39;], &#39;黄山市&#39;: [&#39;屯溪区&#39;, &#39;黄山区&#39;, &#39;徽州区&#39;, &#39;歙县&#39;, &#39;休宁县&#39;, &#39;黟县&#39;, &#39;祁门县&#39;], &#39;滁州市&#39;: [&#39;琅琊区&#39;, &#39;南谯区&#39;, &#39;来安县&#39;, &#39;全椒县&#39;, &#39;定远县&#39;, &#39;凤阳县&#39;, &#39;天长市&#39;, &#39;明光市&#39;], &#39;阜阳市&#39;: [&#39;颍州区&#39;, &#39;颍东区&#39;, &#39;颍泉区&#39;, &#39;临泉县&#39;, &#39;太和县&#39;, &#39;阜南县&#39;, &#39;颍上县&#39;, &#39;界首市&#39;], &#39;宿州市&#39;: [&#39;埇桥区&#39;, &#39;砀山县&#39;, &#39;萧县&#39;, &#39;灵璧县&#39;, &#39;泗县&#39;], &#39;六安市&#39;: [&#39;金安区&#39;, &#39;裕安区&#39;, &#39;寿县&#39;, &#39;霍邱县&#39;, &#39;舒城县&#39;, &#39;金寨县&#39;, &#39;霍山县&#39;], &#39;亳州市&#39;: [&#39;谯城区&#39;, &#39;涡阳县&#39;, &#39;蒙城县&#39;, &#39;利辛县&#39;], &#39;池州市&#39;: [&#39;贵池区&#39;, &#39;东至县&#39;, &#39;石台县&#39;, &#39;青阳县&#39;], &#39;宣城市&#39;: [&#39;宣州区&#39;, &#39;郎溪县&#39;, &#39;广德县&#39;, &#39;泾县&#39;, &#39;绩溪县&#39;, &#39;旌德县&#39;, &#39;宁国市&#39;]}, &#39;福建省&#39;: {&#39;福州市&#39;: [&#39;鼓楼区&#39;, &#39;台江区&#39;, &#39;仓山区&#39;, &#39;马尾区&#39;, &#39;晋安区&#39;, &#39;闽侯县&#39;, &#39;连江县&#39;, &#39;罗源县&#39;, &#39;闽清县&#39;, &#39;永泰县&#39;, &#39;平潭县&#39;, &#39;福清市&#39;, &#39;长乐市&#39;], &#39;厦门市&#39;: [&#39;思明区&#39;, &#39;海沧区&#39;, &#39;湖里区&#39;, &#39;集美区&#39;, &#39;同安区&#39;, &#39;翔安区&#39;], &#39;莆田市&#39;: [&#39;城厢区&#39;, &#39;涵江区&#39;, &#39;荔城区&#39;, &#39;秀屿区&#39;, &#39;仙游县&#39;], &#39;三明市&#39;: [&#39;梅列区&#39;, &#39;三元区&#39;, &#39;明溪县&#39;, &#39;清流县&#39;, &#39;宁化县&#39;, &#39;大田县&#39;, &#39;尤溪县&#39;, &#39;沙县&#39;, &#39;将乐县&#39;, &#39;泰宁县&#39;, &#39;建宁县&#39;, &#39;永安市&#39;], &#39;泉州市&#39;: [&#39;鲤城区&#39;, &#39;丰泽区&#39;, &#39;洛江区&#39;, &#39;泉港区&#39;, &#39;惠安县&#39;, &#39;安溪县&#39;, &#39;永春县&#39;, &#39;德化县&#39;, &#39;金门县&#39;, &#39;石狮市&#39;, &#39;晋江市&#39;, &#39;南安市&#39;], &#39;漳州市&#39;: [&#39;芗城区&#39;, &#39;龙文区&#39;, &#39;云霄县&#39;, &#39;漳浦县&#39;, &#39;诏安县&#39;, &#39;长泰县&#39;, &#39;东山县&#39;, &#39;南靖县&#39;, &#39;平和县&#39;, &#39;华安县&#39;, &#39;龙海市&#39;], &#39;南平市&#39;: [&#39;延平区&#39;, &#39;建阳区&#39;, &#39;顺昌县&#39;, &#39;浦城县&#39;, &#39;光泽县&#39;, &#39;松溪县&#39;, &#39;政和县&#39;, &#39;邵武市&#39;, &#39;武夷山市&#39;, &#39;建瓯市&#39;], &#39;龙岩市&#39;: [&#39;新罗区&#39;, &#39;永定区&#39;, &#39;长汀县&#39;, &#39;上杭县&#39;, &#39;武平县&#39;, &#39;连城县&#39;, &#39;漳平市&#39;], &#39;宁德市&#39;: [&#39;蕉城区&#39;, &#39;霞浦县&#39;, &#39;古田县&#39;, &#39;屏南县&#39;, &#39;寿宁县&#39;, &#39;周宁县&#39;, &#39;柘荣县&#39;, &#39;福安市&#39;, &#39;福鼎市&#39;]}, &#39;江西省&#39;: {&#39;南昌市&#39;: [&#39;东湖区&#39;, &#39;西湖区&#39;, &#39;青云谱区&#39;, &#39;湾里区&#39;, &#39;青山湖区&#39;, &#39;新建区&#39;, &#39;南昌县&#39;, &#39;安义县&#39;, &#39;进贤县&#39;], &#39;景德镇市&#39;: [&#39;昌江区&#39;, &#39;珠山区&#39;, &#39;浮梁县&#39;, &#39;乐平市&#39;], &#39;萍乡市&#39;: [&#39;安源区&#39;, &#39;湘东区&#39;, &#39;莲花县&#39;, &#39;上栗县&#39;, &#39;芦溪县&#39;], &#39;九江市&#39;: [&#39;庐山区&#39;, &#39;浔阳区&#39;, &#39;九江县&#39;, &#39;武宁县&#39;, &#39;修水县&#39;, &#39;永修县&#39;, &#39;德安县&#39;, &#39;星子县&#39;, &#39;都昌县&#39;, &#39;湖口县&#39;, &#39;彭泽县&#39;, &#39;瑞昌市&#39;, &#39;共青城市&#39;], &#39;新余市&#39;: [&#39;渝水区&#39;, &#39;分宜县&#39;], &#39;鹰潭市&#39;: [&#39;月湖区&#39;, &#39;余江县&#39;, &#39;贵溪市&#39;], &#39;赣州市&#39;: [&#39;章贡区&#39;, &#39;南康区&#39;, &#39;赣县&#39;, &#39;信丰县&#39;, &#39;大余县&#39;, &#39;上犹县&#39;, &#39;崇义县&#39;, &#39;安远县&#39;, &#39;龙南县&#39;, &#39;定南县&#39;, &#39;全南县&#39;, &#39;宁都县&#39;, &#39;于都县&#39;, &#39;兴国县&#39;, &#39;会昌县&#39;, &#39;寻乌县&#39;, &#39;石城县&#39;, &#39;瑞金市&#39;], &#39;吉安市&#39;: [&#39;吉州区&#39;, &#39;青原区&#39;, &#39;吉安县&#39;, &#39;吉水县&#39;, &#39;峡江县&#39;, &#39;新干县&#39;, &#39;永丰县&#39;, &#39;泰和县&#39;, &#39;遂川县&#39;, &#39;万安县&#39;, &#39;安福县&#39;, &#39;永新县&#39;, &#39;井冈山市&#39;], &#39;宜春市&#39;: [&#39;袁州区&#39;, &#39;奉新县&#39;, &#39;万载县&#39;, &#39;上高县&#39;, &#39;宜丰县&#39;, &#39;靖安县&#39;, &#39;铜鼓县&#39;, &#39;丰城市&#39;, &#39;樟树市&#39;, &#39;高安市&#39;], &#39;抚州市&#39;: [&#39;临川区&#39;, &#39;南城县&#39;, &#39;黎川县&#39;, &#39;南丰县&#39;, &#39;崇仁县&#39;, &#39;乐安县&#39;, &#39;宜黄县&#39;, &#39;金溪县&#39;, &#39;资溪县&#39;, &#39;东乡县&#39;, &#39;广昌县&#39;], &#39;上饶市&#39;: [&#39;信州区&#39;, &#39;广丰区&#39;, &#39;上饶县&#39;, &#39;玉山县&#39;, &#39;铅山县&#39;, &#39;横峰县&#39;, &#39;弋阳县&#39;, &#39;余干县&#39;, &#39;鄱阳县&#39;, &#39;万年县&#39;, &#39;婺源县&#39;, &#39;德兴市&#39;]}, &#39;山东省&#39;: {&#39;济南市&#39;: [&#39;历下区&#39;, &#39;市中区&#39;, &#39;槐荫区&#39;, &#39;天桥区&#39;, &#39;历城区&#39;, &#39;长清区&#39;, &#39;平阴县&#39;, &#39;济阳县&#39;, &#39;商河县&#39;, &#39;章丘市&#39;], &#39;青岛市&#39;: [&#39;市南区&#39;, &#39;市北区&#39;, &#39;黄岛区&#39;, &#39;崂山区&#39;, &#39;李沧区&#39;, &#39;城阳区&#39;, &#39;胶州市&#39;, &#39;即墨市&#39;, &#39;平度市&#39;, &#39;莱西市&#39;], &#39;淄博市&#39;: [&#39;淄川区&#39;, &#39;张店区&#39;, &#39;博山区&#39;, &#39;临淄区&#39;, &#39;周村区&#39;, &#39;桓台县&#39;, &#39;高青县&#39;, &#39;沂源县&#39;], &#39;枣庄市&#39;: [&#39;市中区&#39;, &#39;薛城区&#39;, &#39;峄城区&#39;, &#39;台儿庄区&#39;, &#39;山亭区&#39;, &#39;滕州市&#39;], &#39;东营市&#39;: [&#39;东营区&#39;, &#39;河口区&#39;, &#39;垦利县&#39;, &#39;利津县&#39;, &#39;广饶县&#39;], &#39;烟台市&#39;: [&#39;芝罘区&#39;, &#39;福山区&#39;, &#39;牟平区&#39;, &#39;莱山区&#39;, &#39;长岛县&#39;, &#39;龙口市&#39;, &#39;莱阳市&#39;, &#39;莱州市&#39;, &#39;蓬莱市&#39;, &#39;招远市&#39;, &#39;栖霞市&#39;, &#39;海阳市&#39;], &#39;潍坊市&#39;: [&#39;潍城区&#39;, &#39;寒亭区&#39;, &#39;坊子区&#39;, &#39;奎文区&#39;, &#39;临朐县&#39;, &#39;昌乐县&#39;, &#39;青州市&#39;, &#39;诸城市&#39;, &#39;寿光市&#39;, &#39;安丘市&#39;, &#39;高密市&#39;, &#39;昌邑市&#39;], &#39;济宁市&#39;: [&#39;任城区&#39;, &#39;兖州区&#39;, &#39;微山县&#39;, &#39;鱼台县&#39;, &#39;金乡县&#39;, &#39;嘉祥县&#39;, &#39;汶上县&#39;, &#39;泗水县&#39;, &#39;梁山县&#39;, &#39;曲阜市&#39;, &#39;邹城市&#39;], &#39;泰安市&#39;: [&#39;泰山区&#39;, &#39;岱岳区&#39;, &#39;宁阳县&#39;, &#39;东平县&#39;, &#39;新泰市&#39;, &#39;肥城市&#39;], &#39;威海市&#39;: [&#39;环翠区&#39;, &#39;文登区&#39;, &#39;荣成市&#39;, &#39;乳山市&#39;], &#39;日照市&#39;: [&#39;东港区&#39;, &#39;岚山区&#39;, &#39;五莲县&#39;, &#39;莒县&#39;], &#39;莱芜市&#39;: [&#39;莱城区&#39;, &#39;钢城区&#39;], &#39;临沂市&#39;: [&#39;兰山区&#39;, &#39;罗庄区&#39;, &#39;河东区&#39;, &#39;沂南县&#39;, &#39;郯城县&#39;, &#39;沂水县&#39;, &#39;兰陵县&#39;, &#39;费县&#39;, &#39;平邑县&#39;, &#39;莒南县&#39;, &#39;蒙阴县&#39;, &#39;临沭县&#39;], &#39;德州市&#39;: [&#39;德城区&#39;, &#39;陵城区&#39;, &#39;宁津县&#39;, &#39;庆云县&#39;, &#39;临邑县&#39;, &#39;齐河县&#39;, &#39;平原县&#39;, &#39;夏津县&#39;, &#39;武城县&#39;, &#39;乐陵市&#39;, &#39;禹城市&#39;], &#39;聊城市&#39;: [&#39;东昌府区&#39;, &#39;阳谷县&#39;, &#39;莘县&#39;, &#39;茌平县&#39;, &#39;东阿县&#39;, &#39;冠县&#39;, &#39;高唐县&#39;, &#39;临清市&#39;], &#39;滨州市&#39;: [&#39;滨城区&#39;, &#39;沾化区&#39;, &#39;惠民县&#39;, &#39;阳信县&#39;, &#39;无棣县&#39;, &#39;博兴县&#39;, &#39;邹平县&#39;], &#39;菏泽市&#39;: [&#39;牡丹区&#39;, &#39;曹县&#39;, &#39;单县&#39;, &#39;成武县&#39;, &#39;巨野县&#39;, &#39;郓城县&#39;, &#39;鄄城县&#39;, &#39;定陶县&#39;, &#39;东明县&#39;]}, &#39;河南省&#39;: {&#39;郑州市&#39;: [&#39;中原区&#39;, &#39;二七区&#39;, &#39;管城回族区&#39;, &#39;金水区&#39;, &#39;上街区&#39;, &#39;惠济区&#39;, &#39;中牟县&#39;, &#39;巩义市&#39;, &#39;荥阳市&#39;, &#39;新密市&#39;, &#39;新郑市&#39;, &#39;登封市&#39;], &#39;开封市&#39;: [&#39;龙亭区&#39;, &#39;顺河回族区&#39;, &#39;鼓楼区&#39;, &#39;禹王台区&#39;, &#39;金明区&#39;, &#39;祥符区&#39;, &#39;杞县&#39;, &#39;通许县&#39;, &#39;尉氏县&#39;, &#39;兰考县&#39;], &#39;洛阳市&#39;: [&#39;老城区&#39;, &#39;西工区&#39;, &#39;瀍河回族区&#39;, &#39;涧西区&#39;, &#39;吉利区&#39;, &#39;洛龙区&#39;, &#39;孟津县&#39;, &#39;新安县&#39;, &#39;栾川县&#39;, &#39;嵩县&#39;, &#39;汝阳县&#39;, &#39;宜阳县&#39;, &#39;洛宁县&#39;, &#39;伊川县&#39;, &#39;偃师市&#39;], &#39;平顶山市&#39;: [&#39;新华区&#39;, &#39;卫东区&#39;, &#39;石龙区&#39;, &#39;湛河区&#39;, &#39;宝丰县&#39;, &#39;叶县&#39;, &#39;鲁山县&#39;, &#39;郏县&#39;, &#39;舞钢市&#39;, &#39;汝州市&#39;], &#39;安阳市&#39;: [&#39;文峰区&#39;, &#39;北关区&#39;, &#39;殷都区&#39;, &#39;龙安区&#39;, &#39;安阳县&#39;, &#39;汤阴县&#39;, &#39;滑县&#39;, &#39;内黄县&#39;, &#39;林州市&#39;], &#39;鹤壁市&#39;: [&#39;鹤山区&#39;, &#39;山城区&#39;, &#39;淇滨区&#39;, &#39;浚县&#39;, &#39;淇县&#39;], &#39;新乡市&#39;: [&#39;红旗区&#39;, &#39;卫滨区&#39;, &#39;凤泉区&#39;, &#39;牧野区&#39;, &#39;新乡县&#39;, &#39;获嘉县&#39;, &#39;原阳县&#39;, &#39;延津县&#39;, &#39;封丘县&#39;, &#39;长垣县&#39;, &#39;卫辉市&#39;, &#39;辉县市&#39;], &#39;焦作市&#39;: [&#39;解放区&#39;, &#39;中站区&#39;, &#39;马村区&#39;, &#39;山阳区&#39;, &#39;修武县&#39;, &#39;博爱县&#39;, &#39;武陟县&#39;, &#39;温县&#39;, &#39;沁阳市&#39;, &#39;孟州市&#39;], &#39;濮阳市&#39;: [&#39;华龙区&#39;, &#39;清丰县&#39;, &#39;南乐县&#39;, &#39;范县&#39;, &#39;台前县&#39;, &#39;濮阳县&#39;], &#39;许昌市&#39;: [&#39;魏都区&#39;, &#39;许昌县&#39;, &#39;鄢陵县&#39;, &#39;襄城县&#39;, &#39;禹州市&#39;, &#39;长葛市&#39;], &#39;漯河市&#39;: [&#39;源汇区&#39;, &#39;郾城区&#39;, &#39;召陵区&#39;, &#39;舞阳县&#39;, &#39;临颍县&#39;], &#39;三门峡市&#39;: [&#39;湖滨区&#39;, &#39;渑池县&#39;, &#39;陕县&#39;, &#39;卢氏县&#39;, &#39;义马市&#39;, &#39;灵宝市&#39;], &#39;南阳市&#39;: [&#39;宛城区&#39;, &#39;卧龙区&#39;, &#39;南召县&#39;, &#39;方城县&#39;, &#39;西峡县&#39;, &#39;镇平县&#39;, &#39;内乡县&#39;, &#39;淅川县&#39;, &#39;社旗县&#39;, &#39;唐河县&#39;, &#39;新野县&#39;, &#39;桐柏县&#39;, &#39;邓州市&#39;], &#39;商丘市&#39;: [&#39;梁园区&#39;, &#39;睢阳区&#39;, &#39;民权县&#39;, &#39;睢县&#39;, &#39;宁陵县&#39;, &#39;柘城县&#39;, &#39;虞城县&#39;, &#39;夏邑县&#39;, &#39;永城市&#39;], &#39;信阳市&#39;: [&#39;浉河区&#39;, &#39;平桥区&#39;, &#39;罗山县&#39;, &#39;光山县&#39;, &#39;新县&#39;, &#39;商城县&#39;, &#39;固始县&#39;, &#39;潢川县&#39;, &#39;淮滨县&#39;, &#39;息县&#39;], &#39;周口市&#39;: [&#39;川汇区&#39;, &#39;扶沟县&#39;, &#39;西华县&#39;, &#39;商水县&#39;, &#39;沈丘县&#39;, &#39;郸城县&#39;, &#39;淮阳县&#39;, &#39;太康县&#39;, &#39;鹿邑县&#39;, &#39;项城市&#39;], &#39;驻马店市&#39;: [&#39;驿城区&#39;, &#39;西平县&#39;, &#39;上蔡县&#39;, &#39;平舆县&#39;, &#39;正阳县&#39;, &#39;确山县&#39;, &#39;泌阳县&#39;, &#39;汝南县&#39;, &#39;遂平县&#39;, &#39;新蔡县&#39;], &#39;省直辖县级行政区划&#39;: [&#39;济源市&#39;]}, &#39;湖北省&#39;: {&#39;武汉市&#39;: [&#39;江岸区&#39;, &#39;江汉区&#39;, &#39;硚口区&#39;, &#39;汉阳区&#39;, &#39;武昌区&#39;, &#39;青山区&#39;, &#39;洪山区&#39;, &#39;东西湖区&#39;, &#39;汉南区&#39;, &#39;蔡甸区&#39;, &#39;江夏区&#39;, &#39;黄陂区&#39;, &#39;新洲区&#39;], &#39;黄石市&#39;: [&#39;黄石港区&#39;, &#39;西塞山区&#39;, &#39;下陆区&#39;, &#39;铁山区&#39;, &#39;阳新县&#39;, &#39;大冶市&#39;], &#39;十堰市&#39;: [&#39;茅箭区&#39;, &#39;张湾区&#39;, &#39;郧阳区&#39;, &#39;郧西县&#39;, &#39;竹山县&#39;, &#39;竹溪县&#39;, &#39;房县&#39;, &#39;丹江口市&#39;], &#39;宜昌市&#39;: [&#39;西陵区&#39;, &#39;伍家岗区&#39;, &#39;点军区&#39;, &#39;猇亭区&#39;, &#39;夷陵区&#39;, &#39;远安县&#39;, &#39;兴山县&#39;, &#39;秭归县&#39;, &#39;长阳土家族自治县&#39;, &#39;五峰土家族自治县&#39;, &#39;宜都市&#39;, &#39;当阳市&#39;, &#39;枝江市&#39;], &#39;襄阳市&#39;: [&#39;襄城区&#39;, &#39;樊城区&#39;, &#39;襄州区&#39;, &#39;南漳县&#39;, &#39;谷城县&#39;, &#39;保康县&#39;, &#39;老河口市&#39;, &#39;枣阳市&#39;, &#39;宜城市&#39;], &#39;鄂州市&#39;: [&#39;梁子湖区&#39;, &#39;华容区&#39;, &#39;鄂城区&#39;], &#39;荆门市&#39;: [&#39;东宝区&#39;, &#39;掇刀区&#39;, &#39;京山县&#39;, &#39;沙洋县&#39;, &#39;钟祥市&#39;], &#39;孝感市&#39;: [&#39;孝南区&#39;, &#39;孝昌县&#39;, &#39;大悟县&#39;, &#39;云梦县&#39;, &#39;应城市&#39;, &#39;安陆市&#39;, &#39;汉川市&#39;], &#39;荆州市&#39;: [&#39;沙市区&#39;, &#39;荆州区&#39;, &#39;公安县&#39;, &#39;监利县&#39;, &#39;江陵县&#39;, &#39;石首市&#39;, &#39;洪湖市&#39;, &#39;松滋市&#39;], &#39;黄冈市&#39;: [&#39;黄州区&#39;, &#39;团风县&#39;, &#39;红安县&#39;, &#39;罗田县&#39;, &#39;英山县&#39;, &#39;浠水县&#39;, &#39;蕲春县&#39;, &#39;黄梅县&#39;, &#39;麻城市&#39;, &#39;武穴市&#39;], &#39;咸宁市&#39;: [&#39;咸安区&#39;, &#39;嘉鱼县&#39;, &#39;通城县&#39;, &#39;崇阳县&#39;, &#39;通山县&#39;, &#39;赤壁市&#39;], &#39;随州市&#39;: [&#39;曾都区&#39;, &#39;随县&#39;, &#39;广水市&#39;], &#39;恩施土家族苗族自治州&#39;: [&#39;恩施市&#39;, &#39;利川市&#39;, &#39;建始县&#39;, &#39;巴东县&#39;, &#39;宣恩县&#39;, &#39;咸丰县&#39;, &#39;来凤县&#39;, &#39;鹤峰县&#39;], &#39;省直辖县级行政区划&#39;: [&#39;仙桃市&#39;, &#39;潜江市&#39;, &#39;天门市&#39;, &#39;神农架林区&#39;]}, &#39;湖南省&#39;: {&#39;长沙市&#39;: [&#39;芙蓉区&#39;, &#39;天心区&#39;, &#39;岳麓区&#39;, &#39;开福区&#39;, &#39;雨花区&#39;, &#39;望城区&#39;, &#39;长沙县&#39;, &#39;宁乡县&#39;, &#39;浏阳市&#39;], &#39;株洲市&#39;: [&#39;荷塘区&#39;, &#39;芦淞区&#39;, &#39;石峰区&#39;, &#39;天元区&#39;, &#39;株洲县&#39;, &#39;攸县&#39;, &#39;茶陵县&#39;, &#39;炎陵县&#39;, &#39;醴陵市&#39;], &#39;湘潭市&#39;: [&#39;雨湖区&#39;, &#39;岳塘区&#39;, &#39;湘潭县&#39;, &#39;湘乡市&#39;, &#39;韶山市&#39;], &#39;衡阳市&#39;: [&#39;珠晖区&#39;, &#39;雁峰区&#39;, &#39;石鼓区&#39;, &#39;蒸湘区&#39;, &#39;南岳区&#39;, &#39;衡阳县&#39;, &#39;衡南县&#39;, &#39;衡山县&#39;, &#39;衡东县&#39;, &#39;祁东县&#39;, &#39;耒阳市&#39;, &#39;常宁市&#39;], &#39;邵阳市&#39;: [&#39;双清区&#39;, &#39;大祥区&#39;, &#39;北塔区&#39;, &#39;邵东县&#39;, &#39;新邵县&#39;, &#39;邵阳县&#39;, &#39;隆回县&#39;, &#39;洞口县&#39;, &#39;绥宁县&#39;, &#39;新宁县&#39;, &#39;城步苗族自治县&#39;, &#39;武冈市&#39;], &#39;岳阳市&#39;: [&#39;岳阳楼区&#39;, &#39;云溪区&#39;, &#39;君山区&#39;, &#39;岳阳县&#39;, &#39;华容县&#39;, &#39;湘阴县&#39;, &#39;平江县&#39;, &#39;汨罗市&#39;, &#39;临湘市&#39;], &#39;常德市&#39;: [&#39;武陵区&#39;, &#39;鼎城区&#39;, &#39;安乡县&#39;, &#39;汉寿县&#39;, &#39;澧县&#39;, &#39;临澧县&#39;, &#39;桃源县&#39;, &#39;石门县&#39;, &#39;津市市&#39;], &#39;张家界市&#39;: [&#39;永定区&#39;, &#39;武陵源区&#39;, &#39;慈利县&#39;, &#39;桑植县&#39;], &#39;益阳市&#39;: [&#39;资阳区&#39;, &#39;赫山区&#39;, &#39;南县&#39;, &#39;桃江县&#39;, &#39;安化县&#39;, &#39;沅江市&#39;], &#39;郴州市&#39;: [&#39;北湖区&#39;, &#39;苏仙区&#39;, &#39;桂阳县&#39;, &#39;宜章县&#39;, &#39;永兴县&#39;, &#39;嘉禾县&#39;, &#39;临武县&#39;, &#39;汝城县&#39;, &#39;桂东县&#39;, &#39;安仁县&#39;, &#39;资兴市&#39;], &#39;永州市&#39;: [&#39;零陵区&#39;, &#39;冷水滩区&#39;, &#39;祁阳县&#39;, &#39;东安县&#39;, &#39;双牌县&#39;, &#39;道县&#39;, &#39;江永县&#39;, &#39;宁远县&#39;, &#39;蓝山县&#39;, &#39;新田县&#39;, &#39;江华瑶族自治县&#39;], &#39;怀化市&#39;: [&#39;鹤城区&#39;, &#39;中方县&#39;, &#39;沅陵县&#39;, &#39;辰溪县&#39;, &#39;溆浦县&#39;, &#39;会同县&#39;, &#39;麻阳苗族自治县&#39;, &#39;新晃侗族自治县&#39;, &#39;芷江侗族自治县&#39;, &#39;靖州苗族侗族自治县&#39;, &#39;通道侗族自治县&#39;, &#39;洪江市&#39;], &#39;娄底市&#39;: [&#39;娄星区&#39;, &#39;双峰县&#39;, &#39;新化县&#39;, &#39;冷水江市&#39;, &#39;涟源市&#39;], &#39;湘西土家族苗族自治州&#39;: [&#39;吉首市&#39;, &#39;泸溪县&#39;, &#39;凤凰县&#39;, &#39;花垣县&#39;, &#39;保靖县&#39;, &#39;古丈县&#39;, &#39;永顺县&#39;, &#39;龙山县&#39;]}, &#39;广东省&#39;: {&#39;广州市&#39;: [&#39;荔湾区&#39;, &#39;越秀区&#39;, &#39;海珠区&#39;, &#39;天河区&#39;, &#39;白云区&#39;, &#39;黄埔区&#39;, &#39;番禺区&#39;, &#39;花都区&#39;, &#39;南沙区&#39;, &#39;从化区&#39;, &#39;增城区&#39;], &#39;韶关市&#39;: [&#39;武江区&#39;, &#39;浈江区&#39;, &#39;曲江区&#39;, &#39;始兴县&#39;, &#39;仁化县&#39;, &#39;翁源县&#39;, &#39;乳源瑶族自治县&#39;, &#39;新丰县&#39;, &#39;乐昌市&#39;, &#39;南雄市&#39;], &#39;深圳市&#39;: [&#39;罗湖区&#39;, &#39;福田区&#39;, &#39;南山区&#39;, &#39;宝安区&#39;, &#39;龙岗区&#39;, &#39;盐田区&#39;], &#39;珠海市&#39;: [&#39;香洲区&#39;, &#39;斗门区&#39;, &#39;金湾区&#39;], &#39;汕头市&#39;: [&#39;龙湖区&#39;, &#39;金平区&#39;, &#39;濠江区&#39;, &#39;潮阳区&#39;, &#39;潮南区&#39;, &#39;澄海区&#39;, &#39;南澳县&#39;], &#39;佛山市&#39;: [&#39;禅城区&#39;, &#39;南海区&#39;, &#39;顺德区&#39;, &#39;三水区&#39;, &#39;高明区&#39;], &#39;江门市&#39;: [&#39;蓬江区&#39;, &#39;江海区&#39;, &#39;新会区&#39;, &#39;台山市&#39;, &#39;开平市&#39;, &#39;鹤山市&#39;, &#39;恩平市&#39;], &#39;湛江市&#39;: [&#39;赤坎区&#39;, &#39;霞山区&#39;, &#39;坡头区&#39;, &#39;麻章区&#39;, &#39;遂溪县&#39;, &#39;徐闻县&#39;, &#39;廉江市&#39;, &#39;雷州市&#39;, &#39;吴川市&#39;], &#39;茂名市&#39;: [&#39;茂南区&#39;, &#39;电白区&#39;, &#39;高州市&#39;, &#39;化州市&#39;, &#39;信宜市&#39;], &#39;肇庆市&#39;: [&#39;端州区&#39;, &#39;鼎湖区&#39;, &#39;高要区&#39;, &#39;广宁县&#39;, &#39;怀集县&#39;, &#39;封开县&#39;, &#39;德庆县&#39;, &#39;四会市&#39;], &#39;惠州市&#39;: [&#39;惠城区&#39;, &#39;惠阳区&#39;, &#39;博罗县&#39;, &#39;惠东县&#39;, &#39;龙门县&#39;], &#39;梅州市&#39;: [&#39;梅江区&#39;, &#39;梅县区&#39;, &#39;大埔县&#39;, &#39;丰顺县&#39;, &#39;五华县&#39;, &#39;平远县&#39;, &#39;蕉岭县&#39;, &#39;兴宁市&#39;], &#39;汕尾市&#39;: [&#39;城区&#39;, &#39;海丰县&#39;, &#39;陆河县&#39;, &#39;陆丰市&#39;], &#39;河源市&#39;: [&#39;源城区&#39;, &#39;紫金县&#39;, &#39;龙川县&#39;, &#39;连平县&#39;, &#39;和平县&#39;, &#39;东源县&#39;], &#39;阳江市&#39;: [&#39;江城区&#39;, &#39;阳东区&#39;, &#39;阳西县&#39;, &#39;阳春市&#39;], &#39;清远市&#39;: [&#39;清城区&#39;, &#39;清新区&#39;, &#39;佛冈县&#39;, &#39;阳山县&#39;, &#39;连山壮族瑶族自治县&#39;, &#39;连南瑶族自治县&#39;, &#39;英德市&#39;, &#39;连州市&#39;], &#39;东莞市&#39;: [&#39;东莞市&#39;], &#39;中山市&#39;: [&#39;中山市&#39;], &#39;潮州市&#39;: [&#39;湘桥区&#39;, &#39;潮安区&#39;, &#39;饶平县&#39;], &#39;揭阳市&#39;: [&#39;榕城区&#39;, &#39;揭东区&#39;, &#39;揭西县&#39;, &#39;惠来县&#39;, &#39;普宁市&#39;], &#39;云浮市&#39;: [&#39;云城区&#39;, &#39;云安区&#39;, &#39;新兴县&#39;, &#39;郁南县&#39;, &#39;罗定市&#39;]}, &#39;广西壮族自治区&#39;: {&#39;南宁市&#39;: [&#39;兴宁区&#39;, &#39;青秀区&#39;, &#39;江南区&#39;, &#39;西乡塘区&#39;, &#39;良庆区&#39;, &#39;邕宁区&#39;, &#39;武鸣区&#39;, &#39;隆安县&#39;, &#39;马山县&#39;, &#39;上林县&#39;, &#39;宾阳县&#39;, &#39;横县&#39;], &#39;柳州市&#39;: [&#39;城中区&#39;, &#39;鱼峰区&#39;, &#39;柳南区&#39;, &#39;柳北区&#39;, &#39;柳江县&#39;, &#39;柳城县&#39;, &#39;鹿寨县&#39;, &#39;融安县&#39;, &#39;融水苗族自治县&#39;, &#39;三江侗族自治县&#39;], &#39;桂林市&#39;: [&#39;秀峰区&#39;, &#39;叠彩区&#39;, &#39;象山区&#39;, &#39;七星区&#39;, &#39;雁山区&#39;, &#39;临桂区&#39;, &#39;阳朔县&#39;, &#39;灵川县&#39;, &#39;全州县&#39;, &#39;兴安县&#39;, &#39;永福县&#39;, &#39;灌阳县&#39;, &#39;龙胜各族自治县&#39;, &#39;资源县&#39;, &#39;平乐县&#39;, &#39;荔浦县&#39;, &#39;恭城瑶族自治县&#39;], &#39;梧州市&#39;: [&#39;万秀区&#39;, &#39;长洲区&#39;, &#39;龙圩区&#39;, &#39;苍梧县&#39;, &#39;藤县&#39;, &#39;蒙山县&#39;, &#39;岑溪市&#39;], &#39;北海市&#39;: [&#39;海城区&#39;, &#39;银海区&#39;, &#39;铁山港区&#39;, &#39;合浦县&#39;], &#39;防城港市&#39;: [&#39;港口区&#39;, &#39;防城区&#39;, &#39;上思县&#39;, &#39;东兴市&#39;], &#39;钦州市&#39;: [&#39;钦南区&#39;, &#39;钦北区&#39;, &#39;灵山县&#39;, &#39;浦北县&#39;], &#39;贵港市&#39;: [&#39;港北区&#39;, &#39;港南区&#39;, &#39;覃塘区&#39;, &#39;平南县&#39;, &#39;桂平市&#39;], &#39;玉林市&#39;: [&#39;玉州区&#39;, &#39;福绵区&#39;, &#39;容县&#39;, &#39;陆川县&#39;, &#39;博白县&#39;, &#39;兴业县&#39;, &#39;北流市&#39;], &#39;百色市&#39;: [&#39;右江区&#39;, &#39;田阳县&#39;, &#39;田东县&#39;, &#39;平果县&#39;, &#39;德保县&#39;, &#39;那坡县&#39;, &#39;凌云县&#39;, &#39;乐业县&#39;, &#39;田林县&#39;, &#39;西林县&#39;, &#39;隆林各族自治县&#39;, &#39;靖西市&#39;], &#39;贺州市&#39;: [&#39;八步区&#39;, &#39;昭平县&#39;, &#39;钟山县&#39;, &#39;富川瑶族自治县&#39;], &#39;河池市&#39;: [&#39;金城江区&#39;, &#39;南丹县&#39;, &#39;天峨县&#39;, &#39;凤山县&#39;, &#39;东兰县&#39;, &#39;罗城仫佬族自治县&#39;, &#39;环江毛南族自治县&#39;, &#39;巴马瑶族自治县&#39;, &#39;都安瑶族自治县&#39;, &#39;大化瑶族自治县&#39;, &#39;宜州市&#39;], &#39;来宾市&#39;: [&#39;兴宾区&#39;, &#39;忻城县&#39;, &#39;象州县&#39;, &#39;武宣县&#39;, &#39;金秀瑶族自治县&#39;, &#39;合山市&#39;], &#39;崇左市&#39;: [&#39;江州区&#39;, &#39;扶绥县&#39;, &#39;宁明县&#39;, &#39;龙州县&#39;, &#39;大新县&#39;, &#39;天等县&#39;, &#39;凭祥市&#39;]}, &#39;海南省&#39;: {&#39;海口市&#39;: [&#39;秀英区&#39;, &#39;龙华区&#39;, &#39;琼山区&#39;, &#39;美兰区&#39;], &#39;三亚市&#39;: [&#39;海棠区&#39;, &#39;吉阳区&#39;, &#39;天涯区&#39;, &#39;崖州区&#39;], &#39;三沙市&#39;: [&#39;西沙群岛&#39;, &#39;南沙群岛&#39;, &#39;中沙群岛的岛礁及其海域&#39;], &#39;省直辖县级行政区划&#39;: [&#39;五指山市&#39;, &#39;琼海市&#39;, &#39;儋州市&#39;, &#39;文昌市&#39;, &#39;万宁市&#39;, &#39;东方市&#39;, &#39;定安县&#39;, &#39;屯昌县&#39;, &#39;澄迈县&#39;, &#39;临高县&#39;, &#39;白沙黎族自治县&#39;, &#39;昌江黎族自治县&#39;, &#39;乐东黎族自治县&#39;, &#39;陵水黎族自治县&#39;, &#39;保亭黎族苗族自治县&#39;, &#39;琼中黎族苗族自治县&#39;]}, &#39;重庆市&#39;: {&#39;市辖区&#39;: [&#39;万州区&#39;, &#39;涪陵区&#39;, &#39;渝中区&#39;, &#39;大渡口区&#39;, &#39;江北区&#39;, &#39;沙坪坝区&#39;, &#39;九龙坡区&#39;, &#39;南岸区&#39;, &#39;北碚区&#39;, &#39;綦江区&#39;, &#39;大足区&#39;, &#39;渝北区&#39;, &#39;巴南区&#39;, &#39;黔江区&#39;, &#39;长寿区&#39;, &#39;江津区&#39;, &#39;合川区&#39;, &#39;永川区&#39;, &#39;南川区&#39;, &#39;璧山区&#39;, &#39;铜梁区&#39;, &#39;潼南区&#39;, &#39;荣昌区&#39;], &#39;县&#39;: [&#39;梁平县&#39;, &#39;城口县&#39;, &#39;丰都县&#39;, &#39;垫江县&#39;, &#39;武隆县&#39;, &#39;忠县&#39;, &#39;开县&#39;, &#39;云阳县&#39;, &#39;奉节县&#39;, &#39;巫山县&#39;, &#39;巫溪县&#39;, &#39;石柱土家族自治县&#39;, &#39;秀山土家族苗族自治县&#39;, &#39;酉阳土家族苗族自治县&#39;, &#39;彭水苗族土家族自治县&#39;]}, &#39;四川省&#39;: {&#39;成都市&#39;: [&#39;锦江区&#39;, &#39;青羊区&#39;, &#39;金牛区&#39;, &#39;武侯区&#39;, &#39;成华区&#39;, &#39;龙泉驿区&#39;, &#39;青白江区&#39;, &#39;新都区&#39;, &#39;温江区&#39;, &#39;金堂县&#39;, &#39;双流县&#39;, &#39;郫县&#39;, &#39;大邑县&#39;, &#39;蒲江县&#39;, &#39;新津县&#39;, &#39;都江堰市&#39;, &#39;彭州市&#39;, &#39;邛崃市&#39;, &#39;崇州市&#39;], &#39;自贡市&#39;: [&#39;自流井区&#39;, &#39;贡井区&#39;, &#39;大安区&#39;, &#39;沿滩区&#39;, &#39;荣县&#39;, &#39;富顺县&#39;], &#39;攀枝花市&#39;: [&#39;东区&#39;, &#39;西区&#39;, &#39;仁和区&#39;, &#39;米易县&#39;, &#39;盐边县&#39;], &#39;泸州市&#39;: [&#39;江阳区&#39;, &#39;纳溪区&#39;, &#39;龙马潭区&#39;, &#39;泸县&#39;, &#39;合江县&#39;, &#39;叙永县&#39;, &#39;古蔺县&#39;], &#39;德阳市&#39;: [&#39;旌阳区&#39;, &#39;中江县&#39;, &#39;罗江县&#39;, &#39;广汉市&#39;, &#39;什邡市&#39;, &#39;绵竹市&#39;], &#39;绵阳市&#39;: [&#39;涪城区&#39;, &#39;游仙区&#39;, &#39;三台县&#39;, &#39;盐亭县&#39;, &#39;安县&#39;, &#39;梓潼县&#39;, &#39;北川羌族自治县&#39;, &#39;平武县&#39;, &#39;江油市&#39;], &#39;广元市&#39;: [&#39;利州区&#39;, &#39;昭化区&#39;, &#39;朝天区&#39;, &#39;旺苍县&#39;, &#39;青川县&#39;, &#39;剑阁县&#39;, &#39;苍溪县&#39;], &#39;遂宁市&#39;: [&#39;船山区&#39;, &#39;安居区&#39;, &#39;蓬溪县&#39;, &#39;射洪县&#39;, &#39;大英县&#39;], &#39;内江市&#39;: [&#39;市中区&#39;, &#39;东兴区&#39;, &#39;威远县&#39;, &#39;资中县&#39;, &#39;隆昌县&#39;], &#39;乐山市&#39;: [&#39;市中区&#39;, &#39;沙湾区&#39;, &#39;五通桥区&#39;, &#39;金口河区&#39;, &#39;犍为县&#39;, &#39;井研县&#39;, &#39;夹江县&#39;, &#39;沐川县&#39;, &#39;峨边彝族自治县&#39;, &#39;马边彝族自治县&#39;, &#39;峨眉山市&#39;], &#39;南充市&#39;: [&#39;顺庆区&#39;, &#39;高坪区&#39;, &#39;嘉陵区&#39;, &#39;南部县&#39;, &#39;营山县&#39;, &#39;蓬安县&#39;, &#39;仪陇县&#39;, &#39;西充县&#39;, &#39;阆中市&#39;], &#39;眉山市&#39;: [&#39;东坡区&#39;, &#39;彭山区&#39;, &#39;仁寿县&#39;, &#39;洪雅县&#39;, &#39;丹棱县&#39;, &#39;青神县&#39;], &#39;宜宾市&#39;: [&#39;翠屏区&#39;, &#39;南溪区&#39;, &#39;宜宾县&#39;, &#39;江安县&#39;, &#39;长宁县&#39;, &#39;高县&#39;, &#39;珙县&#39;, &#39;筠连县&#39;, &#39;兴文县&#39;, &#39;屏山县&#39;], &#39;广安市&#39;: [&#39;广安区&#39;, &#39;前锋区&#39;, &#39;岳池县&#39;, &#39;武胜县&#39;, &#39;邻水县&#39;, &#39;华蓥市&#39;], &#39;达州市&#39;: [&#39;通川区&#39;, &#39;达川区&#39;, &#39;宣汉县&#39;, &#39;开江县&#39;, &#39;大竹县&#39;, &#39;渠县&#39;, &#39;万源市&#39;], &#39;雅安市&#39;: [&#39;雨城区&#39;, &#39;名山区&#39;, &#39;荥经县&#39;, &#39;汉源县&#39;, &#39;石棉县&#39;, &#39;天全县&#39;, &#39;芦山县&#39;, &#39;宝兴县&#39;], &#39;巴中市&#39;: [&#39;巴州区&#39;, &#39;恩阳区&#39;, &#39;通江县&#39;, &#39;南江县&#39;, &#39;平昌县&#39;], &#39;资阳市&#39;: [&#39;雁江区&#39;, &#39;安岳县&#39;, &#39;乐至县&#39;, &#39;简阳市&#39;], &#39;阿坝藏族羌族自治州&#39;: [&#39;汶川县&#39;, &#39;理县&#39;, &#39;茂县&#39;, &#39;松潘县&#39;, &#39;九寨沟县&#39;, &#39;金川县&#39;, &#39;小金县&#39;, &#39;黑水县&#39;, &#39;马尔康县&#39;, &#39;壤塘县&#39;, &#39;阿坝县&#39;, &#39;若尔盖县&#39;, &#39;红原县&#39;], &#39;甘孜藏族自治州&#39;: [&#39;康定市&#39;, &#39;泸定县&#39;, &#39;丹巴县&#39;, &#39;九龙县&#39;, &#39;雅江县&#39;, &#39;道孚县&#39;, &#39;炉霍县&#39;, &#39;甘孜县&#39;, &#39;新龙县&#39;, &#39;德格县&#39;, &#39;白玉县&#39;, &#39;石渠县&#39;, &#39;色达县&#39;, &#39;理塘县&#39;, &#39;巴塘县&#39;, &#39;乡城县&#39;, &#39;稻城县&#39;, &#39;得荣县&#39;], &#39;凉山彝族自治州&#39;: [&#39;西昌市&#39;, &#39;木里藏族自治县&#39;, &#39;盐源县&#39;, &#39;德昌县&#39;, &#39;会理县&#39;, &#39;会东县&#39;, &#39;宁南县&#39;, &#39;普格县&#39;, &#39;布拖县&#39;, &#39;金阳县&#39;, &#39;昭觉县&#39;, &#39;喜德县&#39;, &#39;冕宁县&#39;, &#39;越西县&#39;, &#39;甘洛县&#39;, &#39;美姑县&#39;, &#39;雷波县&#39;]}, &#39;贵州省&#39;: {&#39;贵阳市&#39;: [&#39;南明区&#39;, &#39;云岩区&#39;, &#39;花溪区&#39;, &#39;乌当区&#39;, &#39;白云区&#39;, &#39;观山湖区&#39;, &#39;开阳县&#39;, &#39;息烽县&#39;, &#39;修文县&#39;, &#39;清镇市&#39;], &#39;六盘水市&#39;: [&#39;钟山区&#39;, &#39;六枝特区&#39;, &#39;水城县&#39;, &#39;盘县&#39;], &#39;遵义市&#39;: [&#39;红花岗区&#39;, &#39;汇川区&#39;, &#39;遵义县&#39;, &#39;桐梓县&#39;, &#39;绥阳县&#39;, &#39;正安县&#39;, &#39;道真仡佬族苗族自治县&#39;, &#39;务川仡佬族苗族自治县&#39;, &#39;凤冈县&#39;, &#39;湄潭县&#39;, &#39;余庆县&#39;, &#39;习水县&#39;, &#39;赤水市&#39;, &#39;仁怀市&#39;], &#39;安顺市&#39;: [&#39;西秀区&#39;, &#39;平坝区&#39;, &#39;普定县&#39;, &#39;镇宁布依族苗族自治县&#39;, &#39;关岭布依族苗族自治县&#39;, &#39;紫云苗族布依族自治县&#39;], &#39;毕节市&#39;: [&#39;七星关区&#39;, &#39;大方县&#39;, &#39;黔西县&#39;, &#39;金沙县&#39;, &#39;织金县&#39;, &#39;纳雍县&#39;, &#39;威宁彝族回族苗族自治县&#39;, &#39;赫章县&#39;], &#39;铜仁市&#39;: [&#39;碧江区&#39;, &#39;万山区&#39;, &#39;江口县&#39;, &#39;玉屏侗族自治县&#39;, &#39;石阡县&#39;, &#39;思南县&#39;, &#39;印江土家族苗族自治县&#39;, &#39;德江县&#39;, &#39;沿河土家族自治县&#39;, &#39;松桃苗族自治县&#39;], &#39;黔西南布依族苗族自治州&#39;: [&#39;兴义市&#39;, &#39;兴仁县&#39;, &#39;普安县&#39;, &#39;晴隆县&#39;, &#39;贞丰县&#39;, &#39;望谟县&#39;, &#39;册亨县&#39;, &#39;安龙县&#39;], &#39;黔东南苗族侗族自治州&#39;: [&#39;凯里市&#39;, &#39;黄平县&#39;, &#39;施秉县&#39;, &#39;三穗县&#39;, &#39;镇远县&#39;, &#39;岑巩县&#39;, &#39;天柱县&#39;, &#39;锦屏县&#39;, &#39;剑河县&#39;, &#39;台江县&#39;, &#39;黎平县&#39;, &#39;榕江县&#39;, &#39;从江县&#39;, &#39;雷山县&#39;, &#39;麻江县&#39;, &#39;丹寨县&#39;], &#39;黔南布依族苗族自治州&#39;: [&#39;都匀市&#39;, &#39;福泉市&#39;, &#39;荔波县&#39;, &#39;贵定县&#39;, &#39;瓮安县&#39;, &#39;独山县&#39;, &#39;平塘县&#39;, &#39;罗甸县&#39;, &#39;长顺县&#39;, &#39;龙里县&#39;, &#39;惠水县&#39;, &#39;三都水族自治县&#39;]}, &#39;云南省&#39;: {&#39;昆明市&#39;: [&#39;五华区&#39;, &#39;盘龙区&#39;, &#39;官渡区&#39;, &#39;西山区&#39;, &#39;东川区&#39;, &#39;呈贡区&#39;, &#39;晋宁县&#39;, &#39;富民县&#39;, &#39;宜良县&#39;, &#39;石林彝族自治县&#39;, &#39;嵩明县&#39;, &#39;禄劝彝族苗族自治县&#39;, &#39;寻甸回族彝族自治县&#39;, &#39;安宁市&#39;], &#39;曲靖市&#39;: [&#39;麒麟区&#39;, &#39;马龙县&#39;, &#39;陆良县&#39;, &#39;师宗县&#39;, &#39;罗平县&#39;, &#39;富源县&#39;, &#39;会泽县&#39;, &#39;沾益县&#39;, &#39;宣威市&#39;], &#39;玉溪市&#39;: [&#39;红塔区&#39;, &#39;江川县&#39;, &#39;澄江县&#39;, &#39;通海县&#39;, &#39;华宁县&#39;, &#39;易门县&#39;, &#39;峨山彝族自治县&#39;, &#39;新平彝族傣族自治县&#39;, &#39;元江哈尼族彝族傣族自治县&#39;], &#39;保山市&#39;: [&#39;隆阳区&#39;, &#39;施甸县&#39;, &#39;龙陵县&#39;, &#39;昌宁县&#39;, &#39;腾冲市&#39;], &#39;昭通市&#39;: [&#39;昭阳区&#39;, &#39;鲁甸县&#39;, &#39;巧家县&#39;, &#39;盐津县&#39;, &#39;大关县&#39;, &#39;永善县&#39;, &#39;绥江县&#39;, &#39;镇雄县&#39;, &#39;彝良县&#39;, &#39;威信县&#39;, &#39;水富县&#39;], &#39;丽江市&#39;: [&#39;古城区&#39;, &#39;玉龙纳西族自治县&#39;, &#39;永胜县&#39;, &#39;华坪县&#39;, &#39;宁蒗彝族自治县&#39;], &#39;普洱市&#39;: [&#39;思茅区&#39;, &#39;宁洱哈尼族彝族自治县&#39;, &#39;墨江哈尼族自治县&#39;, &#39;景东彝族自治县&#39;, &#39;景谷傣族彝族自治县&#39;, &#39;镇沅彝族哈尼族拉祜族自治县&#39;, &#39;江城哈尼族彝族自治县&#39;, &#39;孟连傣族拉祜族佤族自治县&#39;, &#39;澜沧拉祜族自治县&#39;, &#39;西盟佤族自治县&#39;], &#39;临沧市&#39;: [&#39;临翔区&#39;, &#39;凤庆县&#39;, &#39;云县&#39;, &#39;永德县&#39;, &#39;镇康县&#39;, &#39;双江拉祜族佤族布朗族傣族自治县&#39;, &#39;耿马傣族佤族自治县&#39;, &#39;沧源佤族自治县&#39;], &#39;楚雄彝族自治州&#39;: [&#39;楚雄市&#39;, &#39;双柏县&#39;, &#39;牟定县&#39;, &#39;南华县&#39;, &#39;姚安县&#39;, &#39;大姚县&#39;, &#39;永仁县&#39;, &#39;元谋县&#39;, &#39;武定县&#39;, &#39;禄丰县&#39;], &#39;红河哈尼族彝族自治州&#39;: [&#39;个旧市&#39;, &#39;开远市&#39;, &#39;蒙自市&#39;, &#39;弥勒市&#39;, &#39;屏边苗族自治县&#39;, &#39;建水县&#39;, &#39;石屏县&#39;, &#39;泸西县&#39;, &#39;元阳县&#39;, &#39;红河县&#39;, &#39;金平苗族瑶族傣族自治县&#39;, &#39;绿春县&#39;, &#39;河口瑶族自治县&#39;], &#39;文山壮族苗族自治州&#39;: [&#39;文山市&#39;, &#39;砚山县&#39;, &#39;西畴县&#39;, &#39;麻栗坡县&#39;, &#39;马关县&#39;, &#39;丘北县&#39;, &#39;广南县&#39;, &#39;富宁县&#39;], &#39;西双版纳傣族自治州&#39;: [&#39;景洪市&#39;, &#39;勐海县&#39;, &#39;勐腊县&#39;], &#39;大理白族自治州&#39;: [&#39;大理市&#39;, &#39;漾濞彝族自治县&#39;, &#39;祥云县&#39;, &#39;宾川县&#39;, &#39;弥渡县&#39;, &#39;南涧彝族自治县&#39;, &#39;巍山彝族回族自治县&#39;, &#39;永平县&#39;, &#39;云龙县&#39;, &#39;洱源县&#39;, &#39;剑川县&#39;, &#39;鹤庆县&#39;], &#39;德宏傣族景颇族自治州&#39;: [&#39;瑞丽市&#39;, &#39;芒市&#39;, &#39;梁河县&#39;, &#39;盈江县&#39;, &#39;陇川县&#39;], &#39;怒江傈僳族自治州&#39;: [&#39;泸水县&#39;, &#39;福贡县&#39;, &#39;贡山独龙族怒族自治县&#39;, &#39;兰坪白族普米族自治县&#39;], &#39;迪庆藏族自治州&#39;: [&#39;香格里拉市&#39;, &#39;德钦县&#39;, &#39;维西傈僳族自治县&#39;]}, &#39;西藏自治区&#39;: {&#39;拉萨市&#39;: [&#39;城关区&#39;, &#39;林周县&#39;, &#39;当雄县&#39;, &#39;尼木县&#39;, &#39;曲水县&#39;, &#39;堆龙德庆县&#39;, &#39;达孜县&#39;, &#39;墨竹工卡县&#39;], &#39;日喀则市&#39;: [&#39;桑珠孜区&#39;, &#39;南木林县&#39;, &#39;江孜县&#39;, &#39;定日县&#39;, &#39;萨迦县&#39;, &#39;拉孜县&#39;, &#39;昂仁县&#39;, &#39;谢通门县&#39;, &#39;白朗县&#39;, &#39;仁布县&#39;, &#39;康马县&#39;, &#39;定结县&#39;, &#39;仲巴县&#39;, &#39;亚东县&#39;, &#39;吉隆县&#39;, &#39;聂拉木县&#39;, &#39;萨嘎县&#39;, &#39;岗巴县&#39;], &#39;昌都市&#39;: [&#39;卡若区&#39;, &#39;江达县&#39;, &#39;贡觉县&#39;, &#39;类乌齐县&#39;, &#39;丁青县&#39;, &#39;察雅县&#39;, &#39;八宿县&#39;, &#39;左贡县&#39;, &#39;芒康县&#39;, &#39;洛隆县&#39;, &#39;边坝县&#39;], &#39;林芝市&#39;: [&#39;巴宜区&#39;, &#39;工布江达县&#39;, &#39;米林县&#39;, &#39;墨脱县&#39;, &#39;波密县&#39;, &#39;察隅县&#39;, &#39;朗县&#39;], &#39;山南地区&#39;: [&#39;乃东县&#39;, &#39;扎囊县&#39;, &#39;贡嘎县&#39;, &#39;桑日县&#39;, &#39;琼结县&#39;, &#39;曲松县&#39;, &#39;措美县&#39;, &#39;洛扎县&#39;, &#39;加查县&#39;, &#39;隆子县&#39;, &#39;错那县&#39;, &#39;浪卡子县&#39;], &#39;那曲地区&#39;: [&#39;那曲县&#39;, &#39;嘉黎县&#39;, &#39;比如县&#39;, &#39;聂荣县&#39;, &#39;安多县&#39;, &#39;申扎县&#39;, &#39;索县&#39;, &#39;班戈县&#39;, &#39;巴青县&#39;, &#39;尼玛县&#39;, &#39;双湖县&#39;], &#39;阿里地区&#39;: [&#39;普兰县&#39;, &#39;札达县&#39;, &#39;噶尔县&#39;, &#39;日土县&#39;, &#39;革吉县&#39;, &#39;改则县&#39;, &#39;措勤县&#39;]}, &#39;陕西省&#39;: {&#39;西安市&#39;: [&#39;新城区&#39;, &#39;碑林区&#39;, &#39;莲湖区&#39;, &#39;灞桥区&#39;, &#39;未央区&#39;, &#39;雁塔区&#39;, &#39;阎良区&#39;, &#39;临潼区&#39;, &#39;长安区&#39;, &#39;高陵区&#39;, &#39;蓝田县&#39;, &#39;周至县&#39;, &#39;户县&#39;], &#39;铜川市&#39;: [&#39;王益区&#39;, &#39;印台区&#39;, &#39;耀州区&#39;, &#39;宜君县&#39;], &#39;宝鸡市&#39;: [&#39;渭滨区&#39;, &#39;金台区&#39;, &#39;陈仓区&#39;, &#39;凤翔县&#39;, &#39;岐山县&#39;, &#39;扶风县&#39;, &#39;眉县&#39;, &#39;陇县&#39;, &#39;千阳县&#39;, &#39;麟游县&#39;, &#39;凤县&#39;, &#39;太白县&#39;], &#39;咸阳市&#39;: [&#39;秦都区&#39;, &#39;杨陵区&#39;, &#39;渭城区&#39;, &#39;三原县&#39;, &#39;泾阳县&#39;, &#39;乾县&#39;, &#39;礼泉县&#39;, &#39;永寿县&#39;, &#39;彬县&#39;, &#39;长武县&#39;, &#39;旬邑县&#39;, &#39;淳化县&#39;, &#39;武功县&#39;, &#39;兴平市&#39;], &#39;渭南市&#39;: [&#39;临渭区&#39;, &#39;华县&#39;, &#39;潼关县&#39;, &#39;大荔县&#39;, &#39;合阳县&#39;, &#39;澄城县&#39;, &#39;蒲城县&#39;, &#39;白水县&#39;, &#39;富平县&#39;, &#39;韩城市&#39;, &#39;华阴市&#39;], &#39;延安市&#39;: [&#39;宝塔区&#39;, &#39;延长县&#39;, &#39;延川县&#39;, &#39;子长县&#39;, &#39;安塞县&#39;, &#39;志丹县&#39;, &#39;吴起县&#39;, &#39;甘泉县&#39;, &#39;富县&#39;, &#39;洛川县&#39;, &#39;宜川县&#39;, &#39;黄龙县&#39;, &#39;黄陵县&#39;], &#39;汉中市&#39;: [&#39;汉台区&#39;, &#39;南郑县&#39;, &#39;城固县&#39;, &#39;洋县&#39;, &#39;西乡县&#39;, &#39;勉县&#39;, &#39;宁强县&#39;, &#39;略阳县&#39;, &#39;镇巴县&#39;, &#39;留坝县&#39;, &#39;佛坪县&#39;], &#39;榆林市&#39;: [&#39;榆阳区&#39;, &#39;神木县&#39;, &#39;府谷县&#39;, &#39;横山县&#39;, &#39;靖边县&#39;, &#39;定边县&#39;, &#39;绥德县&#39;, &#39;米脂县&#39;, &#39;佳县&#39;, &#39;吴堡县&#39;, &#39;清涧县&#39;, &#39;子洲县&#39;], &#39;安康市&#39;: [&#39;汉滨区&#39;, &#39;汉阴县&#39;, &#39;石泉县&#39;, &#39;宁陕县&#39;, &#39;紫阳县&#39;, &#39;岚皋县&#39;, &#39;平利县&#39;, &#39;镇坪县&#39;, &#39;旬阳县&#39;, &#39;白河县&#39;], &#39;商洛市&#39;: [&#39;商州区&#39;, &#39;洛南县&#39;, &#39;丹凤县&#39;, &#39;商南县&#39;, &#39;山阳县&#39;, &#39;镇安县&#39;, &#39;柞水县&#39;]}, &#39;甘肃省&#39;: {&#39;兰州市&#39;: [&#39;城关区&#39;, &#39;七里河区&#39;, &#39;西固区&#39;, &#39;安宁区&#39;, &#39;红古区&#39;, &#39;永登县&#39;, &#39;皋兰县&#39;, &#39;榆中县&#39;], &#39;嘉峪关市&#39;: [&#39;嘉峪关市&#39;], &#39;金昌市&#39;: [&#39;金川区&#39;, &#39;永昌县&#39;], &#39;白银市&#39;: [&#39;白银区&#39;, &#39;平川区&#39;, &#39;靖远县&#39;, &#39;会宁县&#39;, &#39;景泰县&#39;], &#39;天水市&#39;: [&#39;秦州区&#39;, &#39;麦积区&#39;, &#39;清水县&#39;, &#39;秦安县&#39;, &#39;甘谷县&#39;, &#39;武山县&#39;, &#39;张家川回族自治县&#39;], &#39;武威市&#39;: [&#39;凉州区&#39;, &#39;民勤县&#39;, &#39;古浪县&#39;, &#39;天祝藏族自治县&#39;], &#39;张掖市&#39;: [&#39;甘州区&#39;, &#39;肃南裕固族自治县&#39;, &#39;民乐县&#39;, &#39;临泽县&#39;, &#39;高台县&#39;, &#39;山丹县&#39;], &#39;平凉市&#39;: [&#39;崆峒区&#39;, &#39;泾川县&#39;, &#39;灵台县&#39;, &#39;崇信县&#39;, &#39;华亭县&#39;, &#39;庄浪县&#39;, &#39;静宁县&#39;], &#39;酒泉市&#39;: [&#39;肃州区&#39;, &#39;金塔县&#39;, &#39;瓜州县&#39;, &#39;肃北蒙古族自治县&#39;, &#39;阿克塞哈萨克族自治县&#39;, &#39;玉门市&#39;, &#39;敦煌市&#39;], &#39;庆阳市&#39;: [&#39;西峰区&#39;, &#39;庆城县&#39;, &#39;环县&#39;, &#39;华池县&#39;, &#39;合水县&#39;, &#39;正宁县&#39;, &#39;宁县&#39;, &#39;镇原县&#39;], &#39;定西市&#39;: [&#39;安定区&#39;, &#39;通渭县&#39;, &#39;陇西县&#39;, &#39;渭源县&#39;, &#39;临洮县&#39;, &#39;漳县&#39;, &#39;岷县&#39;], &#39;陇南市&#39;: [&#39;武都区&#39;, &#39;成县&#39;, &#39;文县&#39;, &#39;宕昌县&#39;, &#39;康县&#39;, &#39;西和县&#39;, &#39;礼县&#39;, &#39;徽县&#39;, &#39;两当县&#39;], &#39;临夏回族自治州&#39;: [&#39;临夏市&#39;, &#39;临夏县&#39;, &#39;康乐县&#39;, &#39;永靖县&#39;, &#39;广河县&#39;, &#39;和政县&#39;, &#39;东乡族自治县&#39;, &#39;积石山保安族东乡族撒拉族自治县&#39;], &#39;甘南藏族自治州&#39;: [&#39;合作市&#39;, &#39;临潭县&#39;, &#39;卓尼县&#39;, &#39;舟曲县&#39;, &#39;迭部县&#39;, &#39;玛曲县&#39;, &#39;碌曲县&#39;, &#39;夏河县&#39;]}, &#39;青海省&#39;: {&#39;西宁市&#39;: [&#39;城东区&#39;, &#39;城中区&#39;, &#39;城西区&#39;, &#39;城北区&#39;, &#39;大通回族土族自治县&#39;, &#39;湟中县&#39;, &#39;湟源县&#39;], &#39;海东市&#39;: [&#39;乐都区&#39;, &#39;平安区&#39;, &#39;民和回族土族自治县&#39;, &#39;互助土族自治县&#39;, &#39;化隆回族自治县&#39;, &#39;循化撒拉族自治县&#39;], &#39;海北藏族自治州&#39;: [&#39;门源回族自治县&#39;, &#39;祁连县&#39;, &#39;海晏县&#39;, &#39;刚察县&#39;], &#39;黄南藏族自治州&#39;: [&#39;同仁县&#39;, &#39;尖扎县&#39;, &#39;泽库县&#39;, &#39;河南蒙古族自治县&#39;], &#39;海南藏族自治州&#39;: [&#39;共和县&#39;, &#39;同德县&#39;, &#39;贵德县&#39;, &#39;兴海县&#39;, &#39;贵南县&#39;], &#39;果洛藏族自治州&#39;: [&#39;玛沁县&#39;, &#39;班玛县&#39;, &#39;甘德县&#39;, &#39;达日县&#39;, &#39;久治县&#39;, &#39;玛多县&#39;], &#39;玉树藏族自治州&#39;: [&#39;玉树市&#39;, &#39;杂多县&#39;, &#39;称多县&#39;, &#39;治多县&#39;, &#39;囊谦县&#39;, &#39;曲麻莱县&#39;], &#39;海西蒙古族藏族自治州&#39;: [&#39;格尔木市&#39;, &#39;德令哈市&#39;, &#39;乌兰县&#39;, &#39;都兰县&#39;, &#39;天峻县&#39;]}, &#39;宁夏回族自治区&#39;: {&#39;银川市&#39;: [&#39;兴庆区&#39;, &#39;西夏区&#39;, &#39;金凤区&#39;, &#39;永宁县&#39;, &#39;贺兰县&#39;, &#39;灵武市&#39;], &#39;石嘴山市&#39;: [&#39;大武口区&#39;, &#39;惠农区&#39;, &#39;平罗县&#39;], &#39;吴忠市&#39;: [&#39;利通区&#39;, &#39;红寺堡区&#39;, &#39;盐池县&#39;, &#39;同心县&#39;, &#39;青铜峡市&#39;], &#39;固原市&#39;: [&#39;原州区&#39;, &#39;西吉县&#39;, &#39;隆德县&#39;, &#39;泾源县&#39;, &#39;彭阳县&#39;], &#39;中卫市&#39;: [&#39;沙坡头区&#39;, &#39;中宁县&#39;, &#39;海原县&#39;]}, &#39;新疆维吾尔自治区&#39;: {&#39;乌鲁木齐市&#39;: [&#39;天山区&#39;, &#39;沙依巴克区&#39;, &#39;新市区&#39;, &#39;水磨沟区&#39;, &#39;头屯河区&#39;, &#39;达坂城区&#39;, &#39;米东区&#39;, &#39;乌鲁木齐县&#39;], &#39;克拉玛依市&#39;: [&#39;独山子区&#39;, &#39;克拉玛依区&#39;, &#39;白碱滩区&#39;, &#39;乌尔禾区&#39;], &#39;吐鲁番市&#39;: [&#39;高昌区&#39;, &#39;鄯善县&#39;, &#39;托克逊县&#39;], &#39;哈密地区&#39;: [&#39;哈密市&#39;, &#39;巴里坤哈萨克自治县&#39;, &#39;伊吾县&#39;], &#39;昌吉回族自治州&#39;: [&#39;昌吉市&#39;, &#39;阜康市&#39;, &#39;呼图壁县&#39;, &#39;玛纳斯县&#39;, &#39;奇台县&#39;, &#39;吉木萨尔县&#39;, &#39;木垒哈萨克自治县&#39;], &#39;博尔塔拉蒙古自治州&#39;: [&#39;博乐市&#39;, &#39;阿拉山口市&#39;, &#39;精河县&#39;, &#39;温泉县&#39;], &#39;巴音郭楞蒙古自治州&#39;: [&#39;库尔勒市&#39;, &#39;轮台县&#39;, &#39;尉犁县&#39;, &#39;若羌县&#39;, &#39;且末县&#39;, &#39;焉耆回族自治县&#39;, &#39;和静县&#39;, &#39;和硕县&#39;, &#39;博湖县&#39;], &#39;阿克苏地区&#39;: [&#39;阿克苏市&#39;, &#39;温宿县&#39;, &#39;库车县&#39;, &#39;沙雅县&#39;, &#39;新和县&#39;, &#39;拜城县&#39;, &#39;乌什县&#39;, &#39;阿瓦提县&#39;, &#39;柯坪县&#39;], &#39;克孜勒苏柯尔克孜自治州&#39;: [&#39;阿图什市&#39;, &#39;阿克陶县&#39;, &#39;阿合奇县&#39;, &#39;乌恰县&#39;], &#39;喀什地区&#39;: [&#39;喀什市&#39;, &#39;疏附县&#39;, &#39;疏勒县&#39;, &#39;英吉沙县&#39;, &#39;泽普县&#39;, &#39;莎车县&#39;, &#39;叶城县&#39;, &#39;麦盖提县&#39;, &#39;岳普湖县&#39;, &#39;伽师县&#39;, &#39;巴楚县&#39;, &#39;塔什库尔干塔吉克自治县&#39;], &#39;和田地区&#39;: [&#39;和田市&#39;, &#39;和田县&#39;, &#39;墨玉县&#39;, &#39;皮山县&#39;, &#39;洛浦县&#39;, &#39;策勒县&#39;, &#39;于田县&#39;, &#39;民丰县&#39;], &#39;伊犁哈萨克自治州&#39;: [&#39;伊宁市&#39;, &#39;奎屯市&#39;, &#39;霍尔果斯市&#39;, &#39;伊宁县&#39;, &#39;察布查尔锡伯自治县&#39;, &#39;霍城县&#39;, &#39;巩留县&#39;, &#39;新源县&#39;, &#39;昭苏县&#39;, &#39;特克斯县&#39;, &#39;尼勒克县&#39;], &#39;塔城地区&#39;: [&#39;塔城市&#39;, &#39;乌苏市&#39;, &#39;额敏县&#39;, &#39;沙湾县&#39;, &#39;托里县&#39;, &#39;裕民县&#39;, &#39;和布克赛尔蒙古自治县&#39;], &#39;阿勒泰地区&#39;: [&#39;阿勒泰市&#39;, &#39;布尔津县&#39;, &#39;富蕴县&#39;, &#39;福海县&#39;, &#39;哈巴河县&#39;, &#39;青河县&#39;, &#39;吉木乃县&#39;], &#39;自治区直辖县级行政区划&#39;: [&#39;石河子市&#39;, &#39;阿拉尔市&#39;, &#39;图木舒克市&#39;, &#39;五家渠市&#39;]}, &#39;台湾省&#39;: {&#39;台湾省&#39;: [&#39;台湾省&#39;]}, &#39;香港特别行政区&#39;: {&#39;香港特别行政区&#39;: [&#39;香港特别行政区&#39;]}, &#39;澳门特别行政区&#39;: {&#39;澳门特别行政区&#39;: [&#39;澳门特别行政区&#39;]}};</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-smi">Vue</span>.<span class="pl-en">use</span>(<span class="pl-c1">Element</span>)</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">  <span class="pl-k">function</span> <span class="pl-en">formatData</span>(<span class="pl-smi">data</span>){</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    <span class="pl-k">var</span> result <span class="pl-k">=</span> [];</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    <span class="pl-k">for</span>(<span class="pl-k">var</span> key <span class="pl-k">in</span> data){</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      <span class="pl-smi">result</span>.<span class="pl-c1">push</span>({</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        value<span class="pl-k">:</span> key</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      })</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    }</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    <span class="pl-k">return</span> result</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">  }</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">  <span class="pl-k">export</span> <span class="pl-c1">default</span> {</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>address<span class="pl-pds">&#39;</span></span>,</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    props<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>province<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>city<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>detail<span class="pl-pds">&#39;</span></span>],</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    <span class="pl-en">data</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      <span class="pl-k">return</span> {</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        rules<span class="pl-k">:</span> {</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          province<span class="pl-k">:</span> [{required<span class="pl-k">:</span> <span class="pl-c1">true</span>, message<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>请选择省份<span class="pl-pds">&#39;</span></span>, trigger<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>}],</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          city<span class="pl-k">:</span> [{required<span class="pl-k">:</span> <span class="pl-c1">true</span>, message<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>请选择城市<span class="pl-pds">&#39;</span></span>, trigger<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>}],</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          detail<span class="pl-k">:</span> [{required<span class="pl-k">:</span> <span class="pl-c1">true</span>, message<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>请填写详细地址<span class="pl-pds">&#39;</span></span>, trigger<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>}]</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        },</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        form<span class="pl-k">:</span> {</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          province<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">province</span>,</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          city<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">city</span>,</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          detail<span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">detail</span></span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        },</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        provinces<span class="pl-k">:</span> <span class="pl-en">formatData</span>(addressData)</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      }</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    },</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    watch<span class="pl-k">:</span> {</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        form<span class="pl-k">:</span> {</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">            <span class="pl-en">handler</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">val</span>) {</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">                <span class="pl-c1">this</span>.<span class="pl-en">$emit</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>,val);</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">            },</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">            deep<span class="pl-k">:</span> <span class="pl-c1">true</span></span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        }</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    },  </span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    computed<span class="pl-k">:</span> {</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      <span class="pl-en">citys</span><span class="pl-k">:</span> <span class="pl-k">function</span> (){</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        <span class="pl-k">return</span> <span class="pl-en">formatData</span>(addressData[<span class="pl-c1">this</span>.<span class="pl-c1">form</span>.<span class="pl-smi">province</span>])</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      }</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    },</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    methods<span class="pl-k">:</span> {</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      <span class="pl-en">proChange</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">val</span>, <span class="pl-smi">oldVal</span>) {</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        <span class="pl-k">if</span>(oldVal){</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          <span class="pl-c1">this</span>.<span class="pl-c1">form</span>.<span class="pl-smi">city</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          <span class="pl-c1">this</span>.<span class="pl-c1">form</span>.<span class="pl-smi">detail</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        }</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-en">formatData</span>(addressData[<span class="pl-c1">this</span>.<span class="pl-c1">form</span>.<span class="pl-smi">province</span>]);</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        <span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span> <span class="pl-smi">data</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>){</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          <span class="pl-c1">this</span>.<span class="pl-en">$set</span>(<span class="pl-c1">this</span>.<span class="pl-smi">citys</span>, i, data[i]);</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        }</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        <span class="pl-c1">this</span>.<span class="pl-c1">form</span>.<span class="pl-smi">city</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">citys</span>[<span class="pl-c1">0</span>].<span class="pl-c1">value</span>;</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      },</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      <span class="pl-en">cityChange</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">val</span>,  <span class="pl-smi">oldVal</span>) {</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        <span class="pl-k">if</span> (oldVal) {</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          <span class="pl-c1">this</span>.<span class="pl-c1">form</span>.<span class="pl-smi">detail</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">        }</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      },</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      <span class="pl-en">detailChange</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">val</span>) {</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">          <span class="pl-en">console</span>.<span class="pl-c1">log</span>(val);</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">      }</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">    }</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">  }</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;<span class="pl-ent">style</span>&gt;</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">  <span class="pl-e">.address</span> <span class="pl-e">.el-form-item</span>{<span class="pl-c1"><span class="pl-c1">margin-bottom</span></span>: <span class="pl-c1">0</span><span class="pl-k">!important</span>;<span class="pl-c1"><span class="pl-c1">margin-right</span></span>: <span class="pl-c1">0</span><span class="pl-k">!important</span>;}</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">&lt;/<span class="pl-ent">style</span>&gt;</span></td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.18123s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-UGFpyy/nYlS5IejJRN1AblyrLXGeZX6s6K2phIYjFHI=" src="https://assets-cdn.github.com/assets/frameworks-506169cb2fe76254b921e8c944dd406e5cab2d719e657eace8ada98486231472.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-yg11k+AvZvDgd+avAOJ3fbxOiSjWG4gHgTHpNE0GXzI=" src="https://assets-cdn.github.com/assets/github-ca0d7593e02f66f0e077e6af00e2777dbc4e8928d61b88078131e9344d065f32.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

