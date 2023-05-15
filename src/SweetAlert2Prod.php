<?php

declare(strict_types=1);

namespace Yii\Assets;

use Yiisoft\Assets\AssetBundle;
use Yiisoft\Files\PathMatcher\PathMatcher;

/**
 * Production asset bundle for the sweet alert2.
 */
final class SweetAlert2Prod extends AssetBundle
{
    public string|null $basePath = '@assets';
    public string|null $baseUrl = '@assetsUrl';
    public string|null $sourcePath = '@npm/sweetalert2/dist';
    public array $css = ['sweetalert2.min.css'];
    public array $js = ['sweetalert2.min.js'];
    public array $depends = [SweetAlert2::class];

    public function __construct()
    {
        $pathMatcher = new PathMatcher();

        $this->publishOptions = [
            'filter' => $pathMatcher->only('**sweetalert2.min.css', '**sweetalert2.min.js'),
        ];
    }
}
