<?php

declare(strict_types=1);

namespace Yii\Assets;

use Yiisoft\Assets\AssetBundle;

/**
 * CDN asset bundle for the sweet alert2.
 */
final class SweetAlert2Cdn extends AssetBundle
{
    public bool $cdn = true;
    public array $css = ['https://cdn.jsdelivr.net/npm/sweetalert2@11.7.5/dist/sweetalert2.min.css'];
    public array $js = ['https://cdn.jsdelivr.net/npm/sweetalert2@11.7.5/dist/sweetalert2.all.min.js'];
}
