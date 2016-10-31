## Component Hierarchy

**NavHeader**
  - AuthFormContainer
  - NavIndex

**NewUserHeader**
  - AccountFormContainer

**AuthFormContainer**
  - AuthForm

**AccountFormContainer**
  - AccountForm

**HomeContainer**
  - ProgramIndex

**ProgramIndexContainer**
  - ProgramIndex

**ProgramIndex**
  - ProgramIndexItemContainer
    - ProgramIndexItem
    - ProgramIndexItemDetail
    - ProgramIndexItemTools

**ProgramShowContainer**
  - PrgramShowDetails
    - ProgramShowSidebar
    - ProgramShowMain
  - ReviewsIndexContainer
    - ReviewsIndex
    - ReviewsIndexItem

**ReviewFormContainer**
  - NewReviewToolbar
  - ReviewForm
    - ReviewPreview

**ProgramFormContainer**
  - ProgramForm

### Bonus

**SearchContainer**
  - SearchFormContainer
    - SearchForm
  - SearchResultsContainer
    - SearchResults
      - SearchResultsItem

**TimelineContainer**
  - Timeline
    - TimelineItem

## Routes

| Path                              | Component               |
| --------------------------------- | ----------------------- |
| "/programs"                       | "ProgramIndexContainer" |
| "/programs/sign_up"               | "NewUserHeader"         |
| "/programs/:id"                   | "ProgramShowContainer"  |
| "/home"                           | "HomeContainer"         |
| "/programs/:programId/new-review" | "ReviewFormContainer"   |
| "/reviews/:id/edit                | "ReviewFormContainer"   |
| "/programs/new-program"           | "ProgramFormContainer"  |
| "/programs/:id/edit"              | "ProgramFormContainer"  |
| "/search"                         | "SearchContainer"       |
| "/timeline"                       | "TimelineContainer"     |
