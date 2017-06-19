# Component Hierarchy

**NavBarComponent**
  - Logo
  - Link Github
  - Link to LinkedIn
  - User Bar

**AuthComponent**
  - AuthForm

**HomePageComponent**
  - CampaignSlideComponent
    - CampaignIndexContainer
  - CategoryComponent

**CategoryComponent**
  - CategoryIndexContainer

**UserProfileComponent**
  - UserProfileContainer
  - UserCampaigns
  - UserContributions

**UserEditPageContainer**
  - UserEditForm

**UserCampaignComponent**
  - UserCampaignsIndexContainer

**UserContributionComponent**
  - UserContributionIndexContainer
   + IndexItem(date, campaign, amount, reward)

**CreateCampaignStartPageContainer**
  - StartCampaignForm
    + Title
    + Amount

**CreateCampaignContainer**
  - CreateCampaignForm
   + Title
   + Tagline
   + Category
   + Image
  - Sidebar

**CampaignShowPageContainer**
  - CampaignSummary
  - CampaignOverview
  - PerksComponent

**EditCampaign**
  - CampaignEditForm

**RewardComponent**
  - RewardsIndexContainer



## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomePageComponent" |
| "/sign-up" | "Auth Form Container" |
| "/sign-in" | "Auth Form Container" |
| "/profile/:id" | "User Profile Component" |
| "/profile/:id/contributions" | "User Contributions" |
| "/profile/:id/campaigns" | "User Campaigns"
| "/campaign/start" | "Create A Campaign Container" |
| "/campaign/:id" | "Campaign Show Page" |
| "/campaign/:id/edit" | "Edit A Campaign Container" |
| "/campaign/:id/back-it" | "Add A Reward Component"
| "/campaigns" | "Campaign Index Container" |
| "/categories/:id" | "Category Show Page"
