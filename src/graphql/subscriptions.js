/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      title
      introduction
      syllabus
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
      syllabus
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
      syllabus
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
export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement {
    onCreateAnnouncement {
      id
      content
      courseID
      course {
        id
        title
        introduction
        syllabus
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
      courseID
      course {
        id
        title
        introduction
        syllabus
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
      courseID
      course {
        id
        title
        introduction
        syllabus
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
        syllabus
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
        syllabus
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
        syllabus
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
