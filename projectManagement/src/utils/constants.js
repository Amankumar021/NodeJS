export const UserRolesEnum ={
    ADMIN : "admin",
    PROJECT_ADMIN : "prohect_admin",
    MEMBER : "member"
}

export const AvailableUserRoles = Object.values(UserRolesEnum); // ["admin", "project_admin", "member"]// error  // available user roles


export const TaskStatusEnum = { // task status enumeration
    TODO : "todo",
    IN_PROGRESS : "in_progress",
    DONE : "done"

}

export const AvailableTaskStatus = Object.values(TaskStatusEnum); // ["todo", "in_progress", "done"] // available task statuses
