import { Routes, Route } from 'react-router-dom';
import Signin from '../pages/authentication/Signin';
import Signup from '../pages/authentication/Signup';
import Homepage from '../pages/homepage';
import Landing from '../pages/landing';
import Category from '../pages/category';
import Quiz from '../pages/quiz';
import Result from '../pages/result';

// Routes
export const LANDING = '/';
export const HOMEPAGE = '/homepage';
export const SIGNUP = '/signup';
export const SIGNIN = '/signin';
export const CATEGORY = '/category';
export const QUIZ = '/quiz';
export const RESULT = '/result';
export const NOTFOUND = '*';

export const availableRoutes = (
  <Routes>
    <Route path={LANDING} element={<Landing />} />
    <Route path={HOMEPAGE} element={<Homepage />} />
    <Route path={SIGNUP} element={<Signup />} />
    <Route path={SIGNIN} element={<Signin />} />
    <Route path={`${CATEGORY}/:categoryId`} element={<Category />} />
    <Route path={`${QUIZ}/:quizId`} element={<Quiz />} />
    <Route path={RESULT} element={<Result />} />
  </Routes>
);
