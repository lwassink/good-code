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

**NewReviewContainer**
  - NewReviewToolbar
  - NewReviewForm
    - NewReviewPreview

**NewProgramContainer**
  - NewProgramForm

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

| Path                             | Component               |
| -------------------------------- | ----------------------- |
| "/programs"                      | "ProgramIndexContainer" |
| "/programs/sign_up"              | "NewUserHeader"         |
| "/programs/:programId"            | "ProgramShowContainer"  |
| "/home"                          | "HomeContainer"         |
| "/programs/:programId/new-review" | "NewReviewContainer"    |
| "/programs/new-program"          | "NewProgramContainer"   |
| "/search"                        | "SearchContainer"       |
| "/timeline"                      | "TimelineContainer"     |
