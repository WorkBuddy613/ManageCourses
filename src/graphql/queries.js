/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($id: ID!) {
    getAnnouncement(id: $id) {
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
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lessonID
        lesson {
          id
          title
          likeCount
          videoLink
          content
          courseID
          createdAt
          updatedAt
        }
        username
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
