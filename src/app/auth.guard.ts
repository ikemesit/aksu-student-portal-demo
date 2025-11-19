import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StudentService } from './dashboard/shared/student.service';

export const authGuard: CanActivateFn = (route, state) => {
  const studentService = inject(StudentService);
  const router = inject(Router);

  if (studentService.student() || localStorage.getItem('loggedIn') === '1') {
    return true;
  }

  return router.parseUrl('/login');
};
