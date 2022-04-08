 #!/bin/bash
#  run any test with Login in the test title
# this does partial matching allowing test titles to be tagged with a word like @smoke
npx playwright test -g 'Login'