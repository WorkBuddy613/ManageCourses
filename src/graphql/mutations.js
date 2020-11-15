/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      title
      introduction
      imagelink
      instructor
      learners
      tags
      syllabus
      username
      lessons {
        items {
          id
          title
          likeCount
          videoLink
          content
          courseID
          createdAt
          updatedAt
        }
        nextToken
      }
      announcements {
        items {
          id
          content
          publishTime
          courseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      title
      introduction
      imagelink
      instructor
      learners
      tags
      syllabus
      username
      lessons {
        items {
          id
          title
          likeCount
          videoLink
          content
          courseID
          createdAt
          updatedAt
        }
        nextToken
      }
      announcements {
        items {
          id
          content
          publishTime
          courseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      title
      introduction
      imagelink
      instructor
      learners
      tags
      syllabus
      username
      lessons {
        items {
          id
          title
          likeCount
          videoLink
          content
          courseID
          createdAt
          updatedAt
        }
        nextToken
      }
      announcements {
        items {
          id
          content
          publishTime
          courseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAnnouncement = /* GraphQL */ `
  mutation CreateAnnouncement(
    $input: CreateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    createAnnouncement(input: $input, condition: $condition) {
      id
      content
      publishTime
      courseID
      course {
        id
        title
        introduction
        imagelink
        instructor
        learners
        tags
        syllabus
        username
        lessons {
          nextToken
        }
        announcements {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement(
    $input: UpdateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    updateAnnouncement(input: $input, condition: $condition) {
      id
      content
      publishTime
      courseID
      course {
        id
        title
        introduction
        imagelink
        instructor
        learners
        tags
        syllabus
        username
        lessons {
          nextToken
        }
        announcements {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnnouncement = /* GraphQL */ `
  mutation DeleteAnnouncement(
    $input: DeleteAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    deleteAnnouncement(input: $input, condition: $condition) {
      id
      content
      publishTime
      courseID
      course {
        id
        title
        introduction
        imagelink
        instructor
        learners
        tags
        syllabus
        username
        lessons {
          nextToken
        }
        announcements {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      title
      likeCount
      videoLink
      content
      courseID
      course {
        id
        title
        introduction
        imagelink
        instructor
        learners
        tags
        syllabus
        username
        lessons {
          nextToken
        }
        announcements {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          lessonID
          username
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
      id
      title
      likeCount
      videoLink
      content
      courseID
      course {
        id
        title
        introduction
        imagelink
        instructor
        learners
        tags
        syllabus
        username
        lessons {
          nextToken
        }
        announcements {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          lessonID
          username
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      title
      likeCount
      videoLink
      content
      courseID
      course {
        id
        title
        introduction
        imagelink
        instructor
        learners
        tags
        syllabus
        username
        lessons {
          nextToken
        }
        announcements {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          lessonID
          username
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      lessonID
      lesson {
        id
        title
        likeCount
        videoLink
        content
        courseID
        course {
          id
          title
          introduction
          imagelink
          instructor
          learners
          tags
          syllabus
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      username
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      lessonID
      lesson {
        id
        title
        likeCount
        videoLink
        content
        courseID
        course {
          id
          title
          introduction
          imagelink
          instructor
          learners
          tags
          syllabus
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      username
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      lessonID
      lesson {
        id
        title
        likeCount
        videoLink
        content
        courseID
        course {
          id
          title
          introduction
          imagelink
          instructor
          learners
          tags
          syllabus
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      username
      content
      createdAt
      updatedAt
    }
  }
`;
