/*
 * Copyright 2014 Allan Ditzel
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

dashboardApp.directive('hasRole', function(currentUserFactory) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            var currentUser = currentUserFactory.getCurrentUser();
            var rawValue = attributes.hasRole.trim();

            if (!currentUser.hasRole(rawValue)) {
                element.remove();
            }
        }
    }
});