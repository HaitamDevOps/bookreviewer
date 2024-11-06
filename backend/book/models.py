from django.db import models

# specifying language choices 
ALBANIAN = 'SQ'
ARABIC = 'AR'
ARMENIAN = 'HY'
BASQUE = 'EU'
BENGALI = 'BN'
BULGARIAN = 'BG'
CATALAN = 'CA'
CAMBODIAN = 'KM'
CHINESE_MANDARIN = 'ZH'
CROATIAN = 'HR'
CZECH = 'CS'
DANISH = 'DA'
DUTCH = 'NL'
ENGLISH = 'EN'
ESTONIAN = 'ET'
FIJI = 'FJ'
FINNISH = 'FI'
FRENCH = 'FR'
GEORGIAN = 'KA'
GERMAN = 'DE'
GREEK = 'EL'
GUJARATI = 'GU'
HEBREW = 'HE'
HINDI = 'HI'
HUNGARIAN = 'HU'
ICELANDIC = 'IS'
INDONESIAN = 'ID'
IRISH = 'GA'
ITALIAN = 'IT'
JAPANESE = 'JA'
JAVANESE = 'JW'
KOREAN = 'KO'
LATIN = 'LA'
LATVIAN = 'LV'
LITHUANIAN = 'LT'
MACEDONIAN = 'MK'
MALAY = 'MS'
MALAYALAM = 'ML'
MALTESE = 'MT'
MAORI = 'MI'
MARATHI = 'MR'
MONGOLIAN = 'MN'
NEPALI = 'NE'
NORWEGIAN = 'NO'
PERSIAN = 'FA'
POLISH = 'PL'
PORTUGUESE = 'PT'
PUNJABI = 'PA'
QUECHUA = 'QU'
ROMANIAN = 'RO'
RUSSIAN = 'RU'
SAMOAN = 'SM'
SERBIAN = 'SR'
SLOVAK = 'SK'
SLOVENIAN = 'SL'
SPANISH = 'ES'
SWAHILI = 'SW'
SWEDISH = 'SV'
TAMIL = 'TA'
TATAR = 'TT'
TELUGU = 'TE'
THAI = 'TH'
TIBETAN = 'BO'
TONGA = 'TO'
TURKISH = 'TR'
UKRAINIAN = 'UK'
URDU = 'UR'
UZBEK = 'UZ'
VIETNAMESE = 'VI'
WELSH = 'CY'
XHOSA = 'XH'


LANGUAGE_CHOICES = [
    (ALBANIAN, 'Albanian'),
    (ARABIC, 'Arabic'),
    (ARMENIAN, 'Armenian'),
    (BASQUE, 'Basque'),
    (BENGALI, 'Bengali'),
    (BULGARIAN, 'Bulgarian'),
    (CATALAN, 'Catalan'),
    (CAMBODIAN, 'Cambodian'),
    (CHINESE_MANDARIN, 'Chinese (Mandarin)'),
    (CROATIAN, 'Croatian'),
    (CZECH, 'Czech'),
    (DANISH, 'Danish'),
    (DUTCH, 'Dutch'),
    (ENGLISH, 'English'),
    (ESTONIAN, 'Estonian'),
    (FIJI, 'Fiji'),
    (FINNISH, 'Finnish'),
    (FRENCH, 'French'),
    (GEORGIAN, 'Georgian'),
    (GERMAN, 'German'),
    (GREEK, 'Greek'),
    (GUJARATI, 'Gujarati'),
    (HEBREW, 'Hebrew'),
    (HINDI, 'Hindi'),
    (HUNGARIAN, 'Hungarian'),
    (ICELANDIC, 'Icelandic'),
    (INDONESIAN, 'Indonesian'),
    (IRISH, 'Irish'),
    (ITALIAN, 'Italian'),
    (JAPANESE, 'Japanese'),
    (JAVANESE, 'Javanese'),
    (KOREAN, 'Korean'),
    (LATIN, 'Latin'),
    (LATVIAN, 'Latvian'),
    (LITHUANIAN, 'Lithuanian'),
    (MACEDONIAN, 'Macedonian'),
    (MALAY, 'Malay'),
    (MALAYALAM, 'Malayalam'),
    (MALTESE, 'Maltese'),
    (MAORI, 'Maori'),
    (MARATHI, 'Marathi'),
    (MONGOLIAN, 'Mongolian'),
    (NEPALI, 'Nepali'),
    (NORWEGIAN, 'Norwegian'),
    (PERSIAN, 'Persian'),
    (POLISH, 'Polish'),
    (PORTUGUESE, 'Portuguese'),
    (PUNJABI, 'Punjabi'),
    (QUECHUA, 'Quechua'),
    (ROMANIAN, 'Romanian'),
    (RUSSIAN, 'Russian'),
    (SAMOAN, 'Samoan'),
    (SERBIAN, 'Serbian'),
    (SLOVAK, 'Slovak'),
    (SLOVENIAN, 'Slovenian'),
    (SPANISH, 'Spanish'),
    (SWAHILI, 'Swahili'),
    (SWEDISH, 'Swedish'),
    (TAMIL, 'Tamil'),
    (TATAR, 'Tatar'),
    (TELUGU, 'Telugu'),
    (THAI, 'Thai'),
    (TIBETAN, 'Tibetan'),
    (TONGA, 'Tonga'),
    (TURKISH, 'Turkish'),
    (UKRAINIAN, 'Ukrainian'),
    (URDU, 'Urdu'),
    (UZBEK, 'Uzbek'),
    (VIETNAMESE, 'Vietnamese'),
    (WELSH, 'Welsh'),
    (XHOSA, 'Xhosa'),
]

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    language = models.CharField(
        max_length=2,
        choices=LANGUAGE_CHOICES,
        default=ENGLISH
    )
    published_date = models.DateField()
    category = models.CharField(max_length=20, null=True)
    coverUrl = models.CharField(max_length=255, null=True, blank=True)
    overview = models.TextField(null=True)
    added = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    username = models.CharField(max_length=50)
    comment = models.TextField()
    added = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Comment by {self.username} on {self.added:%Y-%m-%d %H:%M}"
    
    class Meta:
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'
