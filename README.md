# sendmarkdown

This package is used to convert a markdown file into HTML and then
send it.

## Why?

I write a lot of notes in markdown.  Frequently, I'd like to
mail these notes to coworkers, myself, etc. for reference and
to get questions answered.  My usual workflow looked like this:

1. Open the markdown document in something like Atom.
2. Preview the markdown as HTML.
3. Copy the HTML and paste it into a new email.
4. Send that email.

This process makes that a little bit shorter, as I can just run
`sendmarkdown` from the command line and everything is basically done for me.

## How?

### Command Line Arguments
`sendmarkdown` accepts a few command line arguments for your email, right now:
```
Usage: sendmarkdown [options] [filename]

Options:
  --version      Show version number                        [boolean]
  -t, --to       a list of email addresses to send this to  [string]
  -c, --cc       a list of email addresses to cc            [string]
  --bcc          a list of email addresses to bcc           [string]
  -s, --subject  The subject to use for the email           [string]
  -h, --help     Show help                                  [boolean]
```

If you include an argument twice (i.e. `-c foo@bar.com -c test@example.com`) it will send the email to both addresses.

### YAML front-matter
`sendmarkdown` will use any
[YAML front-matter](http://jekyllrb.com/docs/frontmatter/) arguments
to _override_ any of the arguments that you pass in the command-line.
This is so you can send multiple emails at a time (at some point).

The following arguments are also accepted as YAML front-matter on
your markdown file:

*  `to` &mdash; Use this field to specify an email address
   (or array of email addresses) that you would like to send
   the email to.
*  `cc` &mdash; Use this to specify email addresses for the _CC:_
   line of your email.
*  `bcc` &mdash; Use this to specify email addresses for the
   _BCC:_ line of your email.
*  `subject` &mdash; Use this to specify the email's subject.

### Headers in your markdown
If `sendmarkdown` can't find a subject from the command line or from
the YAML front-matter, it will look at headers in your markdown as a
last resort.  This means the first `h1`-`h6` will be used as the
markdown file.

## Gotchas
There are a few weird things that `sendmarkdown` that may cause some
frustration:

1. `sendmarkdown` uses the `sendmail` application by default, and
expects you to have all of that already configured.  If you don't
have it configured, you can't send emails.
2. `sendmarkdown` probably doesn't send secure messages.  That means
that if you're sending emails to something like an `@gmail.com`
address, it may show it with a red padlock saying that it's unsecure.

## What's left?

- [ ] Handling other transports than `sendmail`
- [ ] Making `sendmarkdown` an actual binary that can be run.
- [ ] Send more than one email.
- [ ] Refactor code so it doesn't look like an eight-year-old wrote
      it.
- [ ] Publish to `npm`.
- [ ] Syntax highlighting for code snippets.
