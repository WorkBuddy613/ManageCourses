/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      title
      introduction
      imagelink
      instructor
      learners
      syllabus
      tags {
        items {
          id
          content
          courseID
          createdAt
          updatedAt
        }
        nextToken
      }
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      title
      introduction
      imagelink
      instructor
      learners
      syllabus
      tags {
        items {
          id
          content
          courseID
          createdAt
          updatedAt
        }
        nextToken
      }
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      title
      introduction
      imagelink
      instructor
      learners
      syllabus
      tags {
        items {
          id
          content
          courseID
          createdAt
          updatedAt
        }
        nextToken
      }
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      content
      courseID
      course {
        id
        title
        introduction
        imagelink
        instructor
        learners
        syllabus
        tags {
          nextToken
        }
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      content
      courseID
      course {
        id
        title
        introduction
        imagelink
        instructor
        learners
        syllabus
        tags {
          nextToken
        }
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      content
      courseID
      course {
        id
        title
        introduction
        imagelink
        instructor
        learners
        syllabus
        tags {
          nextToken
        }
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
export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement {
    onCreateAnnouncement {
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
        syllabus
        tags {
          nextToken
        }
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
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement {
    onUpdateAnnouncement {
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
        syllabus
        tags {
          nextToken
        }
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
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement {
    onDeleteAnnouncement {
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
        syllabus
        tags {
          nextToken
        }
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
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
        syllabus
        tags {
          nextToken
        }
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
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
        syllabus
        tags {
          nextToken
        }
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
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
        syllabus
        tags {
          nextToken
        }
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
          syllabus
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
          syllabus
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
          syllabus
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
