# Chill

*“No more long lines”*

## Intro & Goal
Our goal is to make Chill the app paves a new way for safe shopping.  Others in this space focus on a pre-ordering/pickup model. Chill is a way for users to still enjoy in person shopping all while waiting from the comfort of their car.

## Who’s it for?

In-person shoppers - those who like to shop in person or want to quality control the product they intend to buy. This also fits those who stand in long lines for sales or for the hottest new thing for their child.
Retail stores - The pandemic has shown that retail stores need something to pivot on when they must limit who can enter their store at a given time.

## Why build it?

It’s something we personally enjoy using
It’s good to have a backup plan in case restrictions are put in place in the future.
Monetization opportunities in advertising and/or data
Usability


# What is it?

## Glossary

**Index View** - homepage of stores to stand in line
**Detailed View** - permalink page for each store
**Map View** - users create routes for all the stores they want to go to (login required)
**In-line View** - shows current wait time and line number
**Store-View** - shows count of people in the store by their id.


## User Types

**Non-Registered Users** - people that have no yet registered but can still stand in line for a store
**Registered Viewers** - people that have registered, these users can create routes(map feature) and favorite/subscribe to stores
**Retail Stores** - stores that are partnered with chill


### Index View
The Index View (ie, homepage) displays a list of stores.

When not signed in, a CTA must be presented to signup.  When signed up, a CTA to stand in line must be present.

Additionally, there should be a section with a list view of the store you’re currently waiting in line for. 

### Detailed View
The Detailed View (ie, permalink page) displays information about the store. CTA to browse their website must be present.

Additionally, this page should include how many people are ahead of you and an estimated time wait.

### Map View
Each post must contain:

**Name** - name of the product or service
**Tagline** - short (<60 character?) description of the product or service
**URL** - duh
**Submitted By** - person that submitted the post with their profile picture and/or name
**Votes** - number of votes for that post w/ profile pics of each user that voted
**Comments** - number of comments for that post (maybe with profile pics of those that commented)

After submitting a post, the user should be instructed to say something interesting, adding the first comment to spark conversation.


## Stores
Each store includes:

**Name** - Name of the store
**URL** - link to website (CTA eg. “ browse target’s deals while you wait”)
**Store hours** - how long is the store open


### Favorite/Subscription
Users can favorite/subscribe to stores.  This does not change the Index View (the feed of posts) but will be used to re-engage users when people they follow take actions like browse websites, or create routes.


### Post Notifications
Users receive the following post notifications:

When they are next in line - In app notification banner will pop up on screen or on phone when they are up to enter the store.
Map Re-engagement
After a user leaves the store, they will get a notification to open the app to get directions to the next store.
Registration
Every user must register getting the following information:

Name
email
Password

### Brainstormed Ideas





### Competitors & Product Inspiration




### Seeding Users & Content
Initial contributors will be hand-picked to create exclusivity and reduce potential spam.  Ideal contributors will be recognizable product people (e.g. Nir Eyal, Semil Shah, Hiten Shah) and investors (e.g. Josh Elman, Nick Chirls) in the startup space but may also include lesser known, early tech adopters.

To capture higher profile startup personalities like Hunter Walk we may submit product finds on his behalf with permission (e.g. based on something he’s tweeted).

### Mockups

#### Index View

#### Detail View


## Tech Notes

Models
User
twitter_uid
name
username
image
headline
daily_email?
Post
user_id
name
tagline
clicks
url
PostVote
user_id
post_id
Comment
user_id
body
CommentVote
user_id
comment_id
Reply
comment_id
user_id
body



## Go to Market

Engage/Recruit Influencers - make them feel part of the product’s success and design
Ask for direct product feedback
Feedback on blog post/press release
Invite Contributors Before Public Launch - ensure content is populated
Blog Post - “30 Minute MVP”
Post on PandoDaily or Andrew Chen’s blog?
Submit to Hacker News, GrowthHackers.com, Designer News, Quibb
Press Release
Reach out to press contacts (PandoDaily, FastCo)
Mass distro other press (see http://customerdevlabs.com/2013/09/24/google-news-api-mturk-press/)
Startup Edition and Ryan’s Personal Email List - ~4k subscribers
Email Existing Linkydink Users


## Post-Launch Marketing

Product Deconstructions Blog Posts

Homepage Feed (Viewing Posts) - Logged In
Initially, everything is displayed chronologically rather than algorithmically or based on votes.  Since the user base will be relatively small at first, we won’t have enough people voting to meaningfully rank products (yet).



Permalink Page
Each post has it’s own URL to share.  Will be useful for encouraging hunters to post links to their findings (e.g. “I just posted Coin to Product Hunt - http://producthunt.co/posts/coin).




Interactions & User Feedback Loops
The success of Product Hunt relies on effective feedback loops and re-engagement with the service, something heavily lacking in the linkydink MVP.  Users can interact in the following ways:

v1
Submit Posts
Comment on Posts
Upvote Posts

Post-v1
View a Post - a la Quibb, show who viewed a post and if not registered, anonymize.  Could also just be the count.
Upvote Comments
Follow Users
Mention Users - ability to tag a user in a post description or comment (e.g. “@ryan posted a similar product, XYZ”)
Forward to Users - notify specific users (a la Potluck) of a product/post they might be interested in, could be seamlessly part of the posting flow


Submitting a Post
Each post includes:

URL
Title/Name - 100 char max
Description - 250 char max
Submitted By
Upvote Count & Who Voted
Comments

No deduping of URL’s (e.g. if a user already submits a link to mindie.co, it shouldn’t prevent another person from submitting again) is necessary for v1 but something to consider in the future


### Commenting on a Post
Any registered user can comment on a post in a chronological discussion (threaded or not?)


### Upvoting/Liking a Post
Any registered user can upvote/like a post, incrementing its vote count by one.


### Email Notifications
Users receive the following email notifications:

Daily Product Hunt digest - list of all posts for the day (later could be top 10 products and could be changed to weekly digest if the user prefers)
Social Re-engagement - new follows, comments, post upvotes



## Registering
Users must register with their Twitter profile and supply an email address.  Their Twitter profile picture, @username, and bio is stored and used.  Users should automatically follow people on Product Hunt that they already follow on Twitter to increase notifications and investment in the service.


## Future Ideas

Notification Feed - notifications of new social activity (comments, upvotes, etc.)
Browser Extension/Bookmarklet
Tweet to Post - ability to tweet at @producthunt to submit new posts
Email to Post - ability to email submit@producthunt.co to submit new posts
Mobile - the site should be responsive and adapt to a mobile interface but mobile usability isn’t necessary for v1.



## Seeding Users & Content
Initial contributors will be hand-picked to create exclusivity and reduce potential spam.  Ideal contributors will be recognizable product people (e.g. Nir Eyal, Semil Shah, Hiten Shah) and investors (e.g. Josh Elman, Nick Chirls) in the startup space but may also include lesser known, early tech adopters.

To capture higher profile startup personalities like Hunter Walk we may submit product finds on his behalf with permission (e.g. based on something he’s tweeted).
